import React from "react";
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

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F5F5F5",
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
      borderColor: "#00ADB5",
    },
  },
  submitBtn: {
    backgroundColor: "#00ADB5",
    color: "#fff",
  },
  formLabel: {
    marginBottom: "4px",
  },
}));

const AdminLogin = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container
        maxWidth="sm"
        className={classes.formContainer}
        component={Paper}
        elevation={2}
      >
        <form>
          <Typography variant="h3" color="initial" align="center">
            Shopeact Admin
          </Typography>
          <Box my={3}>
            <FormControl fullWidth className={classes.textField}>
              <FormLabel className={classes.formLabel}>Email</FormLabel>
              <TextField id="email" type="email" />
            </FormControl>
          </Box>
          <Box my={3}>
            <FormControl fullWidth className={classes.textField}>
              <FormLabel className={classes.formLabel}>Password</FormLabel>
              <TextField id="password" type="password" />
            </FormControl>
          </Box>
          <Box my={3}>
            <Button
              variant="outlined"
              color="default"
              className={classes.submitBtn}
              size="large"
            >
              Login
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
};

export default AdminLogin;
