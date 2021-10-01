import React, { useState, useEffect } from "react";

import {
  Drawer,
  makeStyles,
  Menu,
  MenuItem,
  Typography,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { handleSetPageNameAction } from "../../../redux/navbar/navbarActions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "200px",
    backgroundColor: "#297F87",
    padding: "10px 0",
    // padding:"20px",
    border: "none",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuItem: {
    padding: "10px 20px",
    fontSize: ".875rem",
    margin: "10px 0px 10px 5px",
    color: "#fff",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    "&:hover": {
      backgroundColor: "#fff",

      color: "#297F87",
    },
  },
  selectedMenu: {
    backgroundColor: "#fff",
    color: "#297F87",
  },
  adminName: {
    color: "#fff",
    fontSize: "1.3rem",
    padding: "20px 25px",
    height: "100px",
  },
}));

const SideDrawer = (props) => {
  const classes = useStyles();
  const [selected, setSelected] = useState("summary-report");
  const { handleSetPageName } = props;
  const handleSetSelectedClass = (name) => {
    setSelected(name);
  };

  // set the selected class according to the path name
  useEffect(() => {
    const location = window.location.pathname.lastIndexOf("/");
    // split the path name and get the last part
    const path = window.location.pathname.slice(location + 1);
    handleSetSelectedClass(path);
  }, []);

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={true}
      PaperProps={{
        className: classes.drawer,
      }}
      //   onClose={}
    >
      <Typography variant="h5" color="initial" className={classes.adminName}>
        Shopeact Mobile Store
      </Typography>
      <Box>
        <MenuItem
          className={`${classes.menuItem} ${
            selected === "summary-report" && classes.selectedMenu
          }`}
          onClick={() => {
            handleSetSelectedClass("summary-report");
            handleSetPageName("Summary Report");
          }}
        >
          Summary Report
        </MenuItem>
        <MenuItem
          className={`${classes.menuItem} ${
            selected === "all-products" && classes.selectedMenu
          }`}
          onClick={() => {
            handleSetSelectedClass("all-products");
            handleSetPageName("All Products");
          }}
        >
          All Products
        </MenuItem>
        <Link to="/admin/add-new-product" style={{ textDecoration: "none" }}>
          <MenuItem
            className={`${classes.menuItem} ${
              selected === "add-new-product" && classes.selectedMenu
            }`}
            onClick={() => {
              handleSetSelectedClass("add-new-product");
              handleSetPageName("Add New Product");
            }}
          >
            Add New Product
          </MenuItem>
        </Link>
        <MenuItem
          className={`${classes.menuItem} ${
            selected === "all-orders" && classes.selectedMenu
          }`}
          onClick={() => {
            handleSetSelectedClass("all-orders");
            handleSetPageName("All Orders");
          }}
        >
          All Orders
        </MenuItem>
        <MenuItem
          className={`${classes.menuItem} ${
            selected === "shipments" && classes.selectedMenu
          }`}
          onClick={() => {
            handleSetSelectedClass("shipments");
            handleSetPageName("Shipments");
          }}
        >
          Shipments
        </MenuItem>
        <MenuItem
          className={`${classes.menuItem} ${
            selected === "stocks" && classes.selectedMenu
          }`}
          onClick={() => {
            handleSetSelectedClass("stocks");
            handleSetPageName("Stocks");
          }}
        >
          Stocks
        </MenuItem>
        <MenuItem
          className={`${classes.menuItem} ${
            selected === "payments" && classes.selectedMenu
          }`}
          onClick={() => {
            handleSetSelectedClass("payments");
            handleSetPageName("Payments");
          }}
        >
          Payments
        </MenuItem>
        <MenuItem
          className={`${classes.menuItem} ${
            selected === "users" && classes.selectedMenu
          }`}
          onClick={() => {
            handleSetSelectedClass("users");
            handleSetPageName("Users");
          }}
        >
          Users
        </MenuItem>
      </Box>
    </Drawer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSetPageName: (pageName) =>
      dispatch(handleSetPageNameAction(pageName)),
  };
};

export default connect(null, mapDispatchToProps)(SideDrawer);
