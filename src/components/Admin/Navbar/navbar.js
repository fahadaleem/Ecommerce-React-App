import React from "react";
import { connect } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Box,
  Hidden,
  IconButton,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { handleLogoutUser } from "../../../redux/auth/authActions";
import MobileSideDrawer from "../AdminSideDrawer/MobileDrawer";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#297F87",
    width: "calc( 100% - 200px )",
    marginLeft: 200,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "0",
    },
  },
  btn: {
    color: "#fff",
    borderColor: "#fff",
  },
  adminHeading: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  mobileLogoutBtn: {
    color: "#fff",
  },
}));
const Navbar = (props) => {
  const classes = useStyles();
  const { handleLogout } = props;
  return (
    <AppBar
      position="static"
      color="primary"
      className={classes.root}
      elevation={1}
    >
      <Toolbar>
        <Hidden smUp>
          <MobileSideDrawer />
        </Hidden>
        <Typography variant="h6" className={classes.adminHeading}>
          Shopeact Admin Panel
        </Typography>
        <Hidden smDown>
          <Box ml="auto">
            <Button
              variant="outlined"
              color="default"
              startIcon={<ExitToAppIcon />}
              className={classes.btn}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        </Hidden>
        <Hidden smUp>
          <Box ml="auto">
            <IconButton
              aria-label="logout"
              onClick={handleLogout}
              className={classes.mobileLogoutBtn}
            >
              <ExitToAppIcon />
            </IconButton>
          </Box>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogout: () => dispatch(handleLogoutUser()),
  };
};
export default connect(null, mapDispatchToProps)(Navbar);
