import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ data }) => {
  return (
    <>
      {data?.map((item, i) => (
        <ProductCard item={item} key={i} />
      ))}
    </>
  );
};

export default ProductsList;
