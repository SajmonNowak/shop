import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import Home from "./Pages/Home";
import NavBar from "./Components/NavBar";
import Shop from "./Pages/Shop";
import Theme from "./Style/Theme";
import ProductPage from "./Pages/ProductPage";
import GlobalStyle from "./Style/GlobalStyle";
import Footer from "./Components/Footer";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const changeCart = (product, q) => {
    if (cartItems.some((item) => item.id === product.id)) {
      const itemIndex = cartItems.findIndex((item) => item.id === product.id);
      const newCart = [...cartItems];
      newCart[itemIndex].quantity = q;

      setCartItems(newCart);
    } else {
      const newProduct = {
        id: product.id,
        product: product,
        quantity: q,
      };

      setCartItems(cartItems.concat(newProduct));
    }
  };

  const removeFromCart = (productId) => {
    let newCart = [...cartItems];
    newCart.splice(
      newCart.findIndex(function (i) {
        return i.id === productId;
      }),
      1
    );

    setCartItems(newCart);
  };

  console.log("renderApp");

  return (
    <Theme>
      <GlobalStyle/>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route
            path="/cart"
            render={(props) => (
              <Cart
                {...props}
                cartItems={cartItems}
                changeCart={changeCart}
                remove={removeFromCart}
              />
            )}
          />
          <Route
            parth="/shop/:name"
            render={(props) => (
              <ProductPage {...props} changeCart={changeCart} />
            )}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Theme>
  );
};

export default App;
