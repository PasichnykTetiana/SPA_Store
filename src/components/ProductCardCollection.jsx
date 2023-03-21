import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import Grid from "@mui/material/Grid";

function ProductCardCollection({ children }) {
  return (
    <Grid
      container
      spacing={{ xs: 6, sm: 5, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      direction="row"
    >
      {children}
    </Grid>
  );
}

export default ProductCardCollection;
