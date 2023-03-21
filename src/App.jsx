import React from "react";
import { Route, Switch } from "react-router-dom";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import CategoryProducts from "./components/CategoryProducts";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import "./styles/variables.scss";

function App() {
  return (
    <CssVarsProvider>
      <Switch>
        <Route path="/product/:productId">
          <ProductDetailsPage />
        </Route>
        <Route path="/category/:categoryName">
          <CategoryProducts />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </CssVarsProvider>
  );
}

export default App;
