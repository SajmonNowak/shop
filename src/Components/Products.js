import React from "react";
import products from "../Data/products.js";
import Product from "./Product.js";
import { ProductGrid, ProductDiv } from "../Style/styles";

const Products = () => {
  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductDiv key={product.id} >
          <Product  product={product} />
        </ProductDiv>
      ))}
    </ProductGrid>
  );
};

export default Products;
