import React from "react";
import { connect } from "react-redux";
import AdminLogin from "../components/Admin/AdminLogin/AdminLogin";

const AdminDashboard = (props) => {
    const {isLoggedIn} = props;
  return isLoggedIn ? (<h1>Hello You are loggedIn</h1>): (<AdminLogin />);
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.authReducer.isUserLoggedIn
  };
};

export default connect(mapStateToProps, null)(AdminDashboard);
