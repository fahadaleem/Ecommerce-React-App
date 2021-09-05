import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from "./authTypes";

const initialState = {
  isUserLoggedIn: false,
  user: {},
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
        user: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isUserLoggedIn: false,
        error: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};

export default authReducer;
