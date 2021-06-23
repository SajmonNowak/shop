import React, { useRef, useState, useEffect } from "react";
import DropDown from "../Components/DropDown";
import ProductCarousel from "../Components/ProductCarousel";
import { ProductInfo, Recommendation, ReturnPolicy } from "../Style/styles";

const ProductPage = (props) => {
  const product = props.location.state.product;
  const [quantity, setQuantity] = useState(1);
  const [confVisible, setConfVisible] = useState(false);
  const itemAddedRef = useRef();

  const changeQuantity = (value) => {
    setQuantity(value);
  };

  const handleClick = () => {
    props.changeCart(product, quantity);
    setConfVisible(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setConfVisible(false);
    }, 4000);
  }, []);

  return (
    <div>
      <ProductInfo>
        <div className="imgDiv">
          <img src={product.imgs.primary} alt={product.name} />
        </div>
        <div className="sideDiv">
          <h4 className="brand">{product.brand}</h4>
          <h4 className="name">{product.name}</h4>
          <h4 className="price">{product.price} €</h4>
          <DropDown defaultValue={quantity} changeQuantity={changeQuantity} />
          <button onClick={() => handleClick()}>Add to Cart</button>
          {confVisible && (
            <p className="addedConfirmation" ref={itemAddedRef}>
              <i class="fas fa-check"></i>Item Added to Cart
            </p>
          )}
          <ReturnPolicy>
            <div>
              <p>
                <i className="fas fa-shipping-fast"></i>1-2 days
              </p>
            </div>
            <div>
              <p>
                <i className="fas fa-box"></i>Free shipping & returns
              </p>
            </div>
            <div className="lastItem">
              <p>
                <i className="fas fa-undo-alt"></i>100 Days refund policy
              </p>
            </div>
          </ReturnPolicy>
        </div>
      </ProductInfo>
      <Recommendation>
        <h4 className="like">You could also like ...</h4>
        <ProductCarousel />
      </Recommendation>
    </div>
  );
};

export default ProductPage;
