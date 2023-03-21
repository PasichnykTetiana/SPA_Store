import React, { useState, useEffect, useReducer } from "react";
import {
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Pagination,
} from "@mui/material";
import Loader from "../components/Loader";
import Layout from "../components/Layout";
import ProductCardCollection from "../components/ProductCardCollection";
import { getAllProducts } from "../api";
import ProductCard from "../components/ProductCard";

function sortsForm(changeItemsPerPage, handleChange, sort, itemsPerPage) {
  return (
    <Box sx={{ display: "flex" }}>
      <FormControl fullWidth size="small" sx={{ maxWidth: 120, mr: 1 }}>
        <InputLabel id="items-per-page-label">Items per page</InputLabel>
        <Select
          labelId="items-per-page-label"
          id="items-per-page"
          value={itemsPerPage}
          label="items-per-page"
          onChange={changeItemsPerPage}
        >
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="6">6</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth size="small" sx={{ maxWidth: 120 }}>
        <InputLabel id="sort-by-label">Sort by</InputLabel>
        <Select
          labelId="sort-by-label"
          id="sort-by"
          value={sort}
          label="sort-by"
          onChange={handleChange}
        >
          <MenuItem value="asc">Asc</MenuItem>
          <MenuItem value="desc">Desc</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState("asc");
  const [totalItems, setTotalItems] = useState(0);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    getAllProducts(sort).then((data) => {
      setTotalItems(data.length);
      setProducts(
        data.slice(
          (currentPage - 1) * itemsPerPage,
          (currentPage - 1) * itemsPerPage + itemsPerPage
        )
      );
      setProductsLoaded(true);
    });
  }, [sort, currentPage, itemsPerPage]);

  const rerender = () => {
    forceUpdate();
  };

  const onPaginationClick = (event, page) => {
    setCurrentPage(page);
    setProductsLoaded(false);
  };

  const handleChange = (event) => {
    setSort(event.target.value);
    setCurrentPage(1);
    setProductsLoaded(false);
  };

  const changeItemsPerPage = (event) => {
    setItemsPerPage(+event.target.value);
    setCurrentPage(1);
    setProductsLoaded(false);
  };

  const result = products.map((item) => {
    return <ProductCard item={item} key={item.id} rerenderParent={rerender} />;
  });

  const paginationCount = Math.ceil(totalItems / itemsPerPage);

  const sortsFunction = sortsForm(
    changeItemsPerPage,
    handleChange,
    sort,
    itemsPerPage
  );

  return (
    <Layout select={() => sortsFunction} pageName="SPA Store">
      {!productsLoaded ? (
        <Loader />
      ) : (
        <ProductCardCollection>{result}</ProductCardCollection>
      )}
      <Pagination
        count={paginationCount}
        page={currentPage}
        onChange={onPaginationClick}
        variant="outlined"
        color="primary"
        sx={{ mt: 8 }}
      />
    </Layout>
  );
}
