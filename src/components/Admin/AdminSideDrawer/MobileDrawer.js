import React, { useState, useEffect } from "react";

import {
  Drawer,
  makeStyles,
  Menu,
  MenuItem,
  Typography,
  Box,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { handleSetPageNameAction } from "../../../redux/navbar/navbarActions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "200px",
    backgroundColor: "#297F87",
    padding: "80px 0",
    // padding:"20px",
    border: "none",
  },
  menuItem: {
    padding: "10px 20px",
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
  toggleBtn: {
    color: "#fff",
  },
}));

const MobileSideDrawer = (props) => {
  const classes = useStyles();
  const [selected, setSelected] = useState("summary-report");
  const handleSetSelectedClass = (name) => {
    setSelected(name);
  };
  const [toggleDrawer, setToggleDrawer] = useState(false);
  return (
    <div>
      <IconButton
        aria-label="drawer-toggler"
        onClick={() => setToggleDrawer(!toggleDrawer)}
        className={classes.toggleBtn}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="temporary"
        anchor="left"
        open={toggleDrawer}
        PaperProps={{
          className: classes.drawer,
        }}
        onClose={() => setToggleDrawer(!toggleDrawer)}
      >
        <Box>
          <MenuItem
            className={`${classes.menuItem} ${
              selected === "summary-report" && classes.selectedMenu
            }`}
            onClick={() => {
              handleSetSelectedClass("summary-report");
              props.handleSetPageName("Summary Report");
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
              props.handleSetPageName("All Products");
            }}
          >
            All Products
          </MenuItem>
          <MenuItem
            className={`${classes.menuItem} ${
              selected === "add-new-product" && classes.selectedMenu
            }`}
            onClick={() => {
              handleSetSelectedClass("add-new-product");
              props.handleSetPageName("Add New Product");
            }}
          >
            Add New Product
          </MenuItem>
          <MenuItem
            className={`${classes.menuItem} ${
              selected === "all-orders" && classes.selectedMenu
            }`}
            onClick={() => {
              handleSetSelectedClass("all-orders");
              props.handleSetPageName("All Orders");
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
              props.handleSetPageName("Shipments");
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
              props.handleSetPageName("Stocks");
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
              props.handleSetPageName("Payments");
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
              props.handleSetPageName("Users");
            }}
          >
            Users
          </MenuItem>
        </Box>
      </Drawer>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSetPageName: (pageName) =>
      dispatch(handleSetPageNameAction(pageName)),
  };
};

export default connect(null, mapDispatchToProps)(MobileSideDrawer);
