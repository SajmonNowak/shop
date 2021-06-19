import React from "react";
import products from "../Data/products.js";
import Product from "./Product.js";
import { ProductGrid } from "../Style/styles";

const Products = ({ filter }) => {
  return (
    <ProductGrid>
      {products.map((product) => {
        if (filter.includes(product.color)) {
          return (
              <Product key={product.id} product={product} />
          );
        }
      })}
    </ProductGrid>
  );
};

export default Products;
