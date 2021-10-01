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

const useStyles = makeStyles((theme) => ({}));

const AddNewProductForm = () => {
  const classes = useStyles();

  return <form className={classes.root}></form>;
};

export default AddNewProductForm;
