import React from "react";
import Product from "./Product";
import products from "../Data/products.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProductDivCarousel } from "../Style/styles";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const ProductCarousel = () => {
  return (
    <Carousel responsive={responsive}>
      {products.map((product) => {
        return (
          <ProductDivCarousel key={product.id}>
            <Product product={product} />
          </ProductDivCarousel>
        );
      })}
    </Carousel>
  );
};

export default ProductCarousel;
