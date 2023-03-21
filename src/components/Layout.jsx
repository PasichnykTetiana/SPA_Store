import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  useMediaQuery,
  useTheme,
  Container,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import { createUseStyles } from "react-jss";
import { getAllCategories } from "../api";
import Cart from "./Cart";
import Footer from "./Footer";
import { ReactComponent as Logo } from "../assets/logo.svg";
import CategoriesMenu from "./CategoriesMenu";

const useStyles = createUseStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    height: "100vh",
  },
  grid: {
    marginBottom: theme.spacing(4),
  },
  title: {
    fontSize: "4rem",
    textTransform: "capitalize",
    "@media (max-width:600px)": {
      fontSize: "2rem",
    },
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  paddingBottom: theme.spacing(5),
  paddingTop: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

function Layout({ pageName, children, select }) {
  const [categories, setCategories] = useState([]);
  const productsCount = parseInt(localStorage.getItem("productsCount")) || 0;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles({ theme });

  useEffect(() => {
    getAllCategories().then((cats) => {
      setCategories(cats);
    });
  }, []);

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column" }}
      classes={{ root: classes.container }}
      maxWidth={false}
    >
      {!isSmallScreen && (
        <CategoriesMenu categories={categories} categoryLocation={pageName} />
      )}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ margin: "0 auto" }}
        maxWidth="xl"
      >
        {!isSmallScreen && (
          <Grid item xl={4}>
            <Item> {select && select()}</Item>
          </Grid>
        )}
        <Grid item sm={4} xl={4}>
          <Item>
            <NavLink to="/">
              <Logo />
            </NavLink>
          </Item>
        </Grid>
        {isSmallScreen && (
          <Grid item sm={4} xl={4}>
            <Item>
              <CategoriesMenu
                categories={categories}
                categoryLocation={pageName}
              />
            </Item>
          </Grid>
        )}
        <Grid
          display="flex"
          justifyContent="end"
          alignItems="end"
          sm={4}
          xl={4}
        >
          <Item>
            <Link to="/cart">
              <Cart count={productsCount} />
            </Link>
          </Item>
        </Grid>

        {pageName && (
          <Grid sx={{ paddingBottom: 8 }} container item sm={12} xl={12}>
            <Typography variant="h1" className={classes.title}>
              {pageName}
            </Typography>
          </Grid>
        )}
        {isSmallScreen && (
          <Grid justifyContent="space-between" container item sm={12}>
            <Item>{select && select()}</Item>
          </Grid>
        )}
        {children}
      </Grid>
      <Footer categories={categories} categoryLocation={pageName} />
    </Container>
  );
}

export default Layout;
