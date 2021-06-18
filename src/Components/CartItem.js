import React from "react";
import { CartItemGrid } from "../Style/styles";
import DropDown from "./DropDown";

const CartItem = ({ prop, changeCart, remove }) => {
  const product = prop.product;

  const changeQuantity = (value) => {
    changeCart(product, value);
  };

  const calculatePrice = () => {
    let price = (Math.round(prop.quantity * product.price * 100) / 100);
    if (price.toString().includes(".")){
      price.toFixed(2);
    }

    return price;
  };

  return (
    <CartItemGrid>
      <div className="productImg">
        <img src={product.imgs.primary} alt={product.name} />
      </div>
      <div className="productInfo">
        <h4 className="brand">{product.brand}</h4>
        <h4 className="name">{product.name}</h4>
        <DropDown
          defaultValue={prop.quantity}
          changeQuantity={changeQuantity}
        />
        <h4 className="price">{calculatePrice()} €</h4>
        <i
          onClick={() => remove(prop.id)}
          className="far fa-trash-alt trash"
        ></i>
      </div>
    </CartItemGrid>
  );
};

export default CartItem;
