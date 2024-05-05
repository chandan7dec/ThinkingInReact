import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

const FilterableProductTable = ({products}) => {
  const [searchText, setSearchText] = React.useState("");
  const [isStockOnly, setInStockOnly] = React.useState(false);
  return (
    <>
      <SearchBar 
        searchText={searchText} 
        isStockOnly={isStockOnly} 
        onSearchTextChange={setSearchText} 
        onInStockChange={setInStockOnly}
      />
      <ProductTable searchText={searchText}
       isStockOnly={isStockOnly}
       products={products}  />
    </>
  )
}

export default FilterableProductTable
