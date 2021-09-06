import React from "react";
import { connect } from "react-redux";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Box,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { handleLogoutUser } from "../../../redux/auth/authActions";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#297F87",
  },
  btn:{
      color:"#fff",
      borderColor:"#fff"
  }
}));
const Navbar = (props) => {
  const classes = useStyles();
  const {handleLogout} = props;
  return (
    <AppBar
      position="static"
      color="primary"
      className={classes.root}
      elevation={1}
    >
      <Toolbar>
        <Typography variant="h6">Shopeact Admin Panel</Typography>
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
      </Toolbar>
    </AppBar>
  );
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogout: () => dispatch(handleLogoutUser())
    }
}
export default connect(null, mapDispatchToProps)(Navbar);
