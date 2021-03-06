const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhh';

const withAuth = function(req, res, next) {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] ||
    req.cookies.token;

  if (!token) {
    res.status(401).send({
      status: 401,
      success: true,
      msg: 'Unauthorized: No token provided',
    });
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.status(401).send({
          status: 401,
          success: true,
          msg: 'Unauthorized: Invalid token',
        });
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
};

module.exports = withAuth;
