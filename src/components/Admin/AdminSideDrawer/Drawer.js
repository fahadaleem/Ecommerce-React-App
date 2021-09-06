import React, { useState } from "react";

import {
  Drawer,
  makeStyles,
  Menu,
  MenuItem,
  Typography,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "200px",
    backgroundColor: "#297F87",
    padding: "80px 0",
    // padding:"20px",
    border: "none",
    [theme.breakpoints.down("sm")]: {
        display:"none"    
    }
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
}));

const SideDrawer = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState("summary-report");
  const handleSetSelectedClass = (name) => {
    setSelected(name);
  };
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
      <Box>
        <MenuItem
          className={`${classes.menuItem} ${
            selected === "summary-report" && classes.selectedMenu
          }`}
          onClick={() => handleSetSelectedClass("summary-report")}
        >
          Summary Report
        </MenuItem>
        <MenuItem
          className={`${classes.menuItem} ${
            selected === "all-products" && classes.selectedMenu
          }`}
          onClick={() => handleSetSelectedClass("all-products")}
        >
          All Products
        </MenuItem>
        <MenuItem
          className={`${classes.menuItem} ${
            selected === "add-new-product" && classes.selectedMenu
          }`}
          onClick={() => handleSetSelectedClass("add-new-product")}
        >
          Add New Product
        </MenuItem>
        <MenuItem
          className={`${classes.menuItem} ${
            selected === "all-orders" && classes.selectedMenu
          }`}
          onClick={() => handleSetSelectedClass("all-orders")}
        >
          All Orders
        </MenuItem>
        <MenuItem
          className={`${classes.menuItem} ${
            selected === "shipments" && classes.selectedMenu
          }`}
          onClick={() => handleSetSelectedClass("shipments")}
        >
          Shipments
        </MenuItem>
        <MenuItem
          className={`${classes.menuItem} ${
            selected === "stocks" && classes.selectedMenu
          }`}
          onClick={() => handleSetSelectedClass("stocks")}
        >
          Stocks
        </MenuItem>
        <MenuItem
          className={`${classes.menuItem} ${
            selected === "payments" && classes.selectedMenu
          }`}
          onClick={() => handleSetSelectedClass("payments")}
        >
          Payments
        </MenuItem>
        <MenuItem
          className={`${classes.menuItem} ${
            selected === "users" && classes.selectedMenu
          }`}
          onClick={() => handleSetSelectedClass("users")}
        >
          Users
        </MenuItem>
      </Box>
    </Drawer>
  );
};

export default SideDrawer;
