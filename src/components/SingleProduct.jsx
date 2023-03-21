import React from "react";
import { Grid, Button, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import ButtonCart from "./ButtonCart";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: "100%",
  textAlign: "center",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  color: theme.palette.text.secondary,
  boxShadow: "none",
  "& a": {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  "& a:hover": {
    color: theme.palette.text.secondary,
  },
}));

export default function SingleProduct({ item, rerenderParent }) {
  return (
    <Grid
      container
      spacing={{ xs: 6, sm: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={4} sm={4} md={6}>
        <Item>
          <CardMedia
            component="img"
            sx={{ width: "75%", margin: "auto" }}
            image={item.image}
            alt={item.title}
          />
        </Item>
      </Grid>
      <Grid item xs={4} sm={4} md={6}>
        <Item>
          <Typography variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            Category:{" "}
            <Link to={`/category/${item.category}`}> {item.category} </Link>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            Price: {item.price}
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Description:
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            {item.description}
          </Typography>
          <ButtonCart item={item} rerenderParent={rerenderParent} value="add">
            <Button
              component="div"
              variant="outlined"
              color="primary"
              sx={{ mt: 1 }}
            >
              Add to cart
            </Button>
          </ButtonCart>
        </Item>
      </Grid>
    </Grid>
  );
}
