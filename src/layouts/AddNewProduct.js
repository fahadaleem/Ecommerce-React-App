import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageHeading: {
    margin: "10px 0px",
    fontWeight: "600",
  },
}));

const AddNewProduct = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" className={classes.pageHeading} color="initial">
        Add New Product
      </Typography>
    </Container>
  );
};

export default AddNewProduct;
