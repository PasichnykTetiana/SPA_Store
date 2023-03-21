import React from "react";
import { CircularProgress, Grid } from "@mui/material";

function Loader() {
  return (
    <Grid
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress />
    </Grid>
  );
}

export default Loader;
