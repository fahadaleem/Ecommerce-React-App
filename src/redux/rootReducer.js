import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import navbarReducer from "./navbar/navbarReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  navbar: navbarReducer,
});

export default rootReducer;
