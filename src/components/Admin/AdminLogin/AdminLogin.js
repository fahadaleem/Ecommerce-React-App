import React, { useState } from "react";
import {
  Container,
  makeStyles,
  Typography,
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  TextField,
  Paper,
  Button,
} from "@material-ui/core";
import { connect } from "react-redux";
import { handleLoginUser } from "../../../redux/auth/authActions";
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#297F87",
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  formContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    padding: "1.2rem 2rem",
    borderRadius: "0.3rem",
    "& h3": {
      color: "#303841",
      fontWeight: "600",
    },
  },
  textField: {
    "& .MuiInput-underline:after": {
      borderColor: "#297F87",
    },
  },
  submitBtn: {
    backgroundColor: "#297F87",
    color: "#fff",
    '&:hover':{
      color:"#297F87"
    }
  },
  formLabel: {
    marginBottom: "4px",
  },
}));

const AdminLogin = (props) => {
  const classes = useStyles();
  const { error, handleLogin } = props;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  return (
    <div className={classes.root}>
      <Container
        maxWidth="sm"
        className={classes.formContainer}
        component={Paper}
        elevation={2}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin(formData.email, formData.password);
          }}
        >
          <Typography variant="h3" color="initial" align="center">
            Shopeact Admin
          </Typography>
          {error&&<Alert severity="error" style={{margin:"5px 0",}}>{error}</Alert>}
          <Box my={3}>
            <FormControl fullWidth className={classes.textField}>
              <FormLabel className={classes.formLabel}>Email</FormLabel>
              <TextField
                id="email"
                type="email"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
              />
            </FormControl>
          </Box>
          <Box my={3}>
            <FormControl fullWidth className={classes.textField}>
              <FormLabel className={classes.formLabel}>Password</FormLabel>
              <TextField
                id="password"
                type="password"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
              />
            </FormControl>
          </Box>
          <Box my={3}>
            <Button
              variant="outlined"
              color="default"
              className={classes.submitBtn}
              size="large"
              type="submit"
            >
              Login
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.authReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: (email, password) =>
      dispatch(handleLoginUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
