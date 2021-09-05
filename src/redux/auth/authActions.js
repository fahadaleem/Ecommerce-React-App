import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from "./authTypes";
import firebase from "../../firebase-config";

const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
};

const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
    payload: null,
  };
};

const handleLoginUser = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch(loginSuccess(user));
      })
      .then((error) => {
        dispatch(loginFailure(error.message));
      });
  };
};

const handleLogoutUser = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(logoutSuccess());
      });
  };
};

export { handleLoginUser, handleLogoutUser };
