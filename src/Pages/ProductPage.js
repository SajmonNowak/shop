import React, { useState } from "react";
import DropDown from "../Components/DropDown";
import { ProductInfo, ReturnPolicy } from "../Style/styles";

const ProductPage = (props) => {
  const product = props.location.state.product;
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (value) => {
    setQuantity(value);
  }

  const handleClick = () => {
    props.changeCart(product, quantity);
  }

  return (
    <ProductInfo>
      <img src={product.imgs.primary} alt={product.name} />
      <div>
        <h4 className="brand">{product.brand}</h4>
        <h4 className="name">{product.name}</h4>
        <h4 className="price">{product.price} €</h4>
        <DropDown defaultValue={quantity} changeQuantity={changeQuantity}/>
        <button onClick={() => handleClick()}>Add to Cart</button>
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
  );
};

export default ProductPage;
