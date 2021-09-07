import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from "./authTypes";
import app from "../../firebase-config";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Swal from "sweetalert2";

const auth = getAuth();

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
    console.log(email, password, "fahad");
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        localStorage.setItem("userLogin", JSON.stringify(true));
        dispatch(loginSuccess(user));
      })
      .catch((error) => {
        dispatch(loginFailure(error.message));
      });
  };
};

const handleLogoutUser = () => {
  return (dispatch) => {
      signOut(auth)
      .then(() => {
        localStorage.setItem("userLogin", JSON.stringify(false));
        dispatch(logoutSuccess());
      });
  };
};

export { handleLoginUser, handleLogoutUser };
