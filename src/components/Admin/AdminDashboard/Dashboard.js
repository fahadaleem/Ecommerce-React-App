import React from "react";
import Navbar from "../Navbar/navbar";
import SideDrawer from "../AdminSideDrawer/Drawer";
import { Switch, Route } from "react-router-dom";
import AddNewProduct from "../../../layouts/AddNewProduct";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  dashboardContent:{
    width:'calc( 100% - 200px )',
    marginLeft:"200px"
  }
}));
const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className="dashboard">
      <Navbar />
      <SideDrawer />
      <div className={classes.dashboardContent}>
        <Switch>
          <Route path="/admin/add-new-product" component={AddNewProduct} />
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
