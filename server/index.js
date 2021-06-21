/* eslint consistent-return:0 import/order:0 */
// const main = require('./db-connection');
const express = require('express');
const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const { resolve } = require('path');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('./models/User');
const withAuth = require('./middlewares/withAuth');
const {
  saveEmployeeRecords,
  getEmployeeRecords,
  deleteAllEmployeeRecords,
} = require('./controllers/employee');
const secret = 'mysecretsshhh';
const responseSender = require('./middlewares/responseSender');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));

app.use(cookieParser());
// const client = main().catch(console.error);

const mongo_uri =
  'mongodb+srv://rahul:sFIvsLs9KX5yoovd@cluster0.bnext.mongodb.net/csv_upload?retryWrites=true&w=majority';
mongoose.connect(
  mongo_uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(err) {
    if (err) {
      throw err;
    } else {
      console.log(`Successfully connected to ${mongo_uri}`);
    }
  },
);
// console.log(client);
// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

app.get('/api/home', function(req, res) {
  res.send('Welcome!');
});

app.get('/api/secret', withAuth, function(req, res) {
  res.send('The password is potato');
});

app.post('/api/register', function(req, res) {
  const { email, password } = req.body;
  const user = new User({ email, password });
  user.save(function(err) {
    if (err) {
      console.log(err);
      res.status(500).send('Error registering new user please try again.');
    } else {
      res.status(200).json({
        success: true,
        msg: 'Welcome to the club!',
      });
    }
  });
});

app.post('/api/authenticate', function(req, res) {
  const { email, password } = req.body;

  console.log(req.body, email, password);
  User.findOne({ email }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: 'Internal error please try again',
      });
    } else if (!user) {
      res.status(401).json({
        error: 'Incorrect email or password',
      });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500).json({
            error: 'Internal error please try again',
          });
        } else if (!same) {
          res.status(401).json({
            error: 'Incorrect email or password',
          });
        } else {
          // Issue token
          const payload = { email };
          const token = jwt.sign(payload, secret, {
            expiresIn: '1h',
          });
          res
            .cookie('token', token, { httpOnly: true })
            .status(200)
            .send({
              success: true,
              status: 200,
              msg: 'Logged In',
              userEmail: email,
            });
        }
      });
    }
  });
});

app.get('/checkToken', withAuth, function(req, res) {
  res.status(200).send({
    success: true,
    status: 200,
    userEmail: req.email,
  });
});

app.post('/api/save-employees-data', withAuth, saveEmployeeRecords);
app.get(
  '/api/get-employees-data/:page',
  withAuth,
  getEmployeeRecords,
  responseSender,
);
app.get('/api/delete-employees-data', withAuth, deleteAllEmployeeRecords);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

// Start your app.
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});
