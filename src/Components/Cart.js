import React from "react";
import { CartGrid } from "../Style/styles";
import CartItem from "./CartItem";

const Cart = ({ cartItems, changeCart, remove }) => {
  return (
    <div>
      <h2>Your Cart</h2>
      <CartGrid>
      {cartItems.map(
        (item) => (
        (<CartItem key={item.id} prop={item} changeCart={changeCart} remove={remove} />)
        )
      )}
      </CartGrid>
    </div>
  );
};

export default Cart;
