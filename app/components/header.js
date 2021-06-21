import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import CSVDownloader from './csv-downloader';

// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ButtonAppBar(props) {
  const classes = useStyles();
  const { loginHandler, signUpHandler, isLoggedIn, location } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            CSV Upload React App
          </Typography>
          <Button
            variant="contained"
            color="default"
            style={{
              textDecoration: 'none',
              padding: '0 4px 0 0',
              borderRadius: '0px',
            }}
          >
            {isLoggedIn && (
              <Link
                style={{ textDecoration: 'none', padding: '0 10px' }}
                to={location.pathname === '/employees' ? '/' : '/employees'}
              >
                {location.pathname === '/employees'
                  ? 'Home'
                  : 'Go to employees'}
              </Link>
            )}
          </Button>
          {!isLoggedIn && (
            <>
              <Button color="inherit" onClick={loginHandler}>
                Login
              </Button>
              <Button color="inherit" onClick={signUpHandler}>
                Signup
              </Button>
            </>
          )}
          <CSVDownloader />
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => ({
  location: state.router.location,
});
const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(ButtonAppBar);
