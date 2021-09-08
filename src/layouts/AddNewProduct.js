import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import AddNewProductForm from "../components/Products/AddNewProducts/AddNewProductForm";
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
        <Typography variant="h5" color="initial" className={classes.pageHeading}>Add new product</Typography>
      <AddNewProductForm />
    </Container>
  );
};

export default AddNewProduct;
