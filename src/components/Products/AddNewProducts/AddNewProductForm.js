import React, { useState } from "react";
import {
  makeStyles,
  FormControl,
  FormGroup,
  FormHelperText,
  FormLabel,
  Box,
  TextField,
  Grid,
  Typography,
} from "@material-ui/core";
import TextEditor from "../ProductDetailsTextEditor/TextEditor";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px 0",
  },
  textField: {
    margin: "15px 0",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#297F87",
    },
  },
  priceTextField: {
    margin: "0 15px",
    width: "280px",
    "& .MuiOutlinedInput-input": {
      padding: "10px !important",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#297F87",
    },
  },
  fieldContainer:{
      margin:"10px 0"
  }
}));

const AddNewProductForm = () => {
  const classes = useStyles();
  const [productDetails, setProductDetails] = useState({
    productId: "",
    productName: "",
    productDescription: "",
    productPrice: "",
    productImage: "",
    productRegularPrice: "",
    productDiscountedPrice: "",
  });
  return (
    <form className={classes.root}>
      <FormControl component="fieldset" fullWidth>
        <FormLabel component="legend">Product Title</FormLabel>
        <TextField
          id="product-title"
          variant="outlined"
          className={classes.textField}
          value={productDetails.productName}
          onChange={(e) =>
            setProductDetails({
              ...productDetails,
              productName: e.target.value,
            })
          }
        />
      </FormControl>
      <FormControl>
        <FormLabel component="legend">Product Description</FormLabel>
        <TextEditor
          setProductDetails={setProductDetails}
          productDetails={productDetails}
        />
      </FormControl>
      <FormControl component="fieldset" fullWidth>
        <Typography variant="h5" color="initial">
          Price:
        </Typography>
        <Grid container spacing={1}>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Box display="flex" alignItems="center">
              <FormLabel component="legend">Regular Price: </FormLabel>
              <TextField
                id="regular-price"
                variant="outlined"
                className={classes.priceTextField}
                type="number"
                value={productDetails.productRegularPrice}
                onChange={(e) =>
                  setProductDetails({
                    ...productDetails,
                    productRegularPrice: e.target.value,
                  })
                }
              />
            </Box>
          </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Box display="flex" alignItems="center">
              <FormLabel component="legend">Discounted Price: </FormLabel>
              <TextField
                id="discounted-price"
                variant="outlined"
                className={classes.priceTextField}
                type="number"
                value={productDetails.productDiscountedPrice}
                onChange={(e) =>
                  setProductDetails({
                    ...productDetails,
                    productDiscountedPrice: e.target.value,
                  })
                }
              />
            </Box>
          </Grid>
        </Grid>
      </FormControl>
      <FormControl className={classes.fieldContainer}>
      <Typography variant="h5" color="initial">
          Product Quantity
        </Typography>
      <Box display="flex" alignItems="center" my={1}>
              <FormLabel component="legend">Quantity: </FormLabel>
              <TextField
                id="discounted-price"
                variant="outlined"
                className={classes.priceTextField}
                type="number"
                value={productDetails.productDiscountedPrice}
                onChange={(e) =>
                  setProductDetails({
                    ...productDetails,
                    productDiscountedPrice: e.target.value,
                  })
                }
              />
            </Box>
        
      </FormControl>
    </form>
  );
};

export default AddNewProductForm;
