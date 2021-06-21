/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import GlobalStyle from '../../global-styles';
import { EmployeesComp } from '../Employees';
import ButtonAppBar from '../../components/header';
import FormDialog from '../Login/index';
import { MODAL_STATE, MODAL_TYPE } from '../../app.constants';
import { useEffect } from 'react';
import { loginAction, saveUserAction, signupAction, unauthorizedAction } from '../HomePage/actions';
import saga from '../HomePage/saga';
import { useInjectSaga } from 'utils/injectSaga';
import Alert from '../../components/Alert';
import { Container } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));
const key = "app";
function App(props) {
  useInjectSaga({ key, saga });
  const classes = useStyles();
  const {error,message,isLoggedIn,unauthorizedAction,user_email,saveUserAction,isFetching} = props;
  const [userEmail,setUserEmail] = React.useState(user_email);
  const [isClosable,setIsClosable] = React.useState(true);
  const [alertMsg,setAlertMsg] = React.useState(null);
  useEffect(()=>{
    const checkStatus = async ()=>{
      const result = await fetch("/checkToken",{"Content-Type":"application/json",method:"GET"});
      const response = await result.json();
      if(response &&  response.status === 200){
        setUserEmail(response.userEmail);
        saveUserAction(response.userEmail);
      }else if(response && response.status === 401){
        unauthorizedAction();
        setIsClosable(false);
      }
    }
    checkStatus();
  },[]);
  useEffect(() => {
    if(!isLoggedIn){
      setModalType(MODAL_TYPE.LOGIN.id);
      setModalState(MODAL_STATE.OPEN.id);
      setIsClosable(false);
    }
  },[isLoggedIn]);

  useEffect(()=>{
    setAlertMsg({
      color: error?'error':'success',
      severity: error?'error':'success',
      msg:message
    })
  },[error,message]);
  const [modalType, setModalType] = React.useState(MODAL_TYPE.SIGNUP.id);
  const [modalState, setModalState] = React.useState(MODAL_STATE.CLOSE.id);

  const handleClose = (email,password) => {
    setModalState(MODAL_STATE.CLOSE.id);
    if(modalType === MODAL_TYPE.LOGIN.id){
      if(email && password){
        props.loginAction(email,password);
      }
    }else{
      if(email && password){
        props.signupAction(email,password);
      }
    }
  };
  const loginHandler = () => {
    setModalType(MODAL_TYPE.LOGIN.id);
    setModalState(MODAL_STATE.OPEN.id);
  }
  const signUpHandler = () => {
    setModalType(MODAL_TYPE.SIGNUP.id);
    setModalState(MODAL_STATE.OPEN.id);
  }
  return (
    <div>
      <ButtonAppBar isLoggedIn={props.isLoggedIn} loginHandler={loginHandler} signUpHandler={signUpHandler} />
      {userEmail && <h4 style={{textAlign:"center"}}>Logged in as : <span style={{color:"#344fe4"}}>{userEmail}</span></h4>}
      {alertMsg && <Container><Alert  color={alertMsg.color} msg={alertMsg.msg} severity={alertMsg.severity} /></Container>}
      <FormDialog isClosable={isClosable} open={(modalState === MODAL_STATE.OPEN.id)}  handleClose={handleClose} modalType={modalType} />
      <Backdrop className={classes.backdrop} open={isFetching}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/employees" component={EmployeesComp} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.homeReducer.isLoggedIn,
    user_email: state.homeReducer.userEmail,
    isFetching: state.homeReducer.isFetching,
    error: state.homeReducer.error,
    message: state.homeReducer.message,
    success: state.homeReducer.success,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    loginAction: (email,password) => dispatch(loginAction(email,password)),
    signupAction: (email,password) => dispatch(signupAction(email,password)),
    unauthorizedAction: () => dispatch(unauthorizedAction()),
    saveUserAction: (email) => dispatch(saveUserAction(email)),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect
)(App);
