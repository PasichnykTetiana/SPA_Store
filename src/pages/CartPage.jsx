import React, { useReducer } from "react";
import {
  Button,
  Typography,
  Box,
  CardContent,
  CardMedia,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Layout from "../components/Layout";
import cartEmptyImage from "../assets/empty_cart.png";
import ButtonCart from "../components/ButtonCart";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: "100%",
  textAlign: "center",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  color: theme.palette.text.secondary,
}));

function CartPage() {
  const cart = JSON.parse(localStorage.getItem("cart")) || 0;
  const theme = useTheme();
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  function deleteCart() {
    localStorage.removeItem("cart");
    localStorage.removeItem("productsCount");
    rerender();
  }

  function rerender() {
    forceUpdate();
  }

  const result =
    cart &&
    cart.map((item) => {
      return (
        <Grid
          key={item.id}
          justifyContent="center"
          alignItems="center"
          item
          columns={{ xs: 12, sm: 12, md: 12 }}
          container
        >
          <Grid xs={12} sm={8} md={5}>
            <Item>
              <Grid spacing={{ xs: 6, sm: 2, md: 3 }} container>
                <Grid sx={{ margin: "auto" }} item xs={12} sm={4} md={3}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt="product"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item xs={12} sm={8} md={9}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                      <ButtonCart
                        item={item}
                        rerenderParent={rerender}
                        value="delete"
                      >
                        <Button variant="outlined">-</Button>
                      </ButtonCart>
                      <Box mx={2}>
                        <Typography variant="h6" component="span">
                          {item.productAmount}
                        </Typography>
                      </Box>
                      <ButtonCart
                        item={item}
                        rerenderParent={rerender}
                        value="add"
                      >
                        <Button variant="outlined">+</Button>
                      </ButtonCart>
                    </Box>
                    <Typography color="text.secondary" sx={{ mt: 2 }}>
                      Total price:{" "}
                      {(item.price * item.productAmount).toFixed(2)}
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      );
    });

  let total = 0;

  cart &&
    cart.forEach((item) => {
      total += item.productAmount * item.price;
    });
  return (
    <Layout className="position-relative ">
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          paddingBottom: theme.spacing(11),
        }}
      >
        {result !== 0 && result}
        {!cart ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CardMedia
              sx={{
                width: "25%",
                margin: "auto",
              }}
              component="img"
              image={cartEmptyImage}
              alt="Empty cart"
            />
          </Box>
        ) : (
          <Grid
            xs={12}
            sm={8}
            md={5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: theme.spacing(2),
            }}
          >
            <Button variant="outlined" color="secondary" onClick={deleteCart}>
              Clear cart
            </Button>
            <Typography variant="h6">Total: {total.toFixed(2)}</Typography>
          </Grid>
        )}
      </Grid>
    </Layout>
  );
}

export default CartPage;
