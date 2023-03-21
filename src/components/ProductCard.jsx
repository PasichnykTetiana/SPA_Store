import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
  "& a": {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  "& a:hover": {
    color: theme.palette.text.secondary,
  },
}));

export default function ProductCard({ item, rerenderParent }) {
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Item>
        <CardActionArea sx={{ flexGrow: 1 }}>
          <Link to={`/product/${item.id}`}>
            <CardMedia
              sx={{
                width: "25%",
                margin: "auto",
              }}
              component="img"
              image={item.image}
              alt={item.title}
            />
          </Link>
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Link to={`/product/${item.id}`}>{item.title}</Link>
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Category:{" "}
            <Link to={`/category/${item.category}`}> {item.category} </Link>
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Price: {item.price}
          </Typography>
          <ButtonCart item={item} rerenderParent={rerenderParent} value="add">
            <IconButton sx={{ boxShadow: "0 0 2px 2px rgba(139,139,139,0.4)" }}>
              <ShoppingCartIcon />
            </IconButton>
          </ButtonCart>
        </CardContent>
      </Item>
    </Grid>
  );
}
