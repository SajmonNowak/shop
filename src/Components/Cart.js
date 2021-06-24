import React, { useEffect, useState } from "react";
import { CartGrid, CartPage, TotalDiv, Voucher } from "../Style/styles";
import CartItem from "./CartItem";

const Cart = ({ cartItems, changeCart, remove }) => {
  const [price, setPrice] = useState();
  const [voucherOpen, setVoucherOpen] = useState(false);

  const calculatePrice = () => {
    let p = 0;
    cartItems.map((item) => (p += item.product.price * item.quantity));

    setPrice(p);
  };

  const openCouponDiv = () => {
    setVoucherOpen(!voucherOpen);
  };

  useEffect(calculatePrice, [cartItems]);

  return (
    <CartPage>
      <h2 className="cartTitle">Your Cart</h2>
      <div className="cartInfo">
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
        <div className="sideDiv">
          <TotalDiv>
            <h2 style={{marginBottom: "20px"}}>Total</h2>
            <div >
              <h4 style={{fontWeight: "normal"}}>Products</h4>
              <h4 style={{fontWeight: "normal"}}>{price} €</h4>
            </div>
            <div className="shipping">
              <h4 style={{fontWeight: "normal"}}>Shipping</h4>
              <h4>Free</h4>
            </div>
            <div>
              <h4>Total</h4>
              <h4>{price} €</h4>
            </div>
            <button>Buy</button>
          </TotalDiv>
          <Voucher open={voucherOpen}>
            <div className="addCoupon" onClick={openCouponDiv}>
              <p>Add Coupon</p> <i class="fas fa-chevron-down"></i>
            </div>
            {voucherOpen && (
              <div className="couponInput">
                <input type="text" placeholder="Coupon"></input>
                <button>Use Code</button>
              </div>
            )}
          </Voucher>
        </div>
      </div>
    </CartPage>
  );
};

export default Cart;
