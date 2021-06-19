import React from "react";
import { Link } from "react-router-dom";
import { ProductDiv } from "../Style/styles";

const Product = ({ product }) => {
  return (
    <ProductDiv>
      <Link
        to={{
          pathname: `/shop/${product.name}`,
          state: { product },
        }}
      >
        <img src={product.imgs.primary} alt={product.name} />
        <h4 className="brand">{product.brand}</h4>
        <h4 className="name">{product.name}</h4>
        <h4 className="price">{product.price} €</h4>
      </Link>
      </ProductDiv>
  );
};

export default Product;
