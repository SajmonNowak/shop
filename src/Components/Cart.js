import React, { useEffect, useState } from "react";
import { CartGrid } from "../Style/styles";
import CartItem from "./CartItem";

const Cart = ({ cartItems, changeCart, remove }) => {
  const [price, setPrice] = useState();

  const calculatePrice = () => {
    let p = 0;
    cartItems.map((item) => (p += item.product.price * item.quantity));

    setPrice(p);
  };

  useEffect(calculatePrice, [cartItems]);

  return (
    <div>
      <h2>Your Cart</h2>
      <CartGrid>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            prop={item}
            changeCart={changeCart}
            remove={remove}
          />
        ))}
      </CartGrid>
      <div>
        <h2>Total</h2>
        <div>
          <h4>Products</h4>
          <h4>{price}</h4>
        </div>
        <div>
          <h4>Shipping</h4>
          <h4>Free</h4>
        </div>
        <div>
          <h4>Total</h4>
          <h4>{price}</h4>
        </div>
        <button>Buy</button>
      </div>
    </div>
  );
};

export default Cart;
