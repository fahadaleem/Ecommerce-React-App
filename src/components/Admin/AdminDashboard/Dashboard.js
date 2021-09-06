import React from "react";
import Navbar from "../Navbar/navbar";
import SideDrawer from "../AdminSideDrawer/Drawer";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <SideDrawer />
    </div>
  );
};

export default Dashboard;
