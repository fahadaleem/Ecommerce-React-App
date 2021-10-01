import React from "react";
import { connect } from "react-redux";
import AdminLogin from "../components/Admin/AdminLogin/AdminLogin";
import Dashboard from "../components/Admin/AdminDashboard/Dashboard";

const AdminDashboard = (props) => {
  const { isLoggedIn } = props;
  return isLoggedIn ? <Dashboard /> : <AdminLogin />;
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isUserLoggedIn,
  };
};

export default connect(mapStateToProps, null)(AdminDashboard);
