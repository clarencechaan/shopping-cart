import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import MusicShop from "./components/MusicShop";
import MerchShop from "./components/MerchShop";
import SaleShop from "./components/SaleShop";
import Cart from "./components/Cart";
import Details from "./components/Details";
import items from "./items/items.js";
import "./styles/App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [shopItems, setShopItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => setShopItems(items), []);

  function handleAddToCart(item, qty) {
    if (!qty) return;
    if (!isItemInCart(item, cart)) {
      setCart((prevCart) => {
        const newCartItem = { ...item, quantity: qty };
        return [...prevCart, newCartItem];
      });
    } else {
      setCart((prevCart) => {
        const prevCartItem = prevCart.find((c) => c.id === item.id);
        const newCartItem = {
          ...prevCartItem,
          quantity: prevCartItem.quantity + qty,
        };
        const index = prevCart.findIndex((c) => c.id === item.id);
        return [
          ...prevCart.slice(0, index),
          newCartItem,
          ...prevCart.slice(index + 1),
        ];
      });
    }
    removeZeroQuantity();
  }

  function removeZeroQuantity() {
    setCart((prevCart) => prevCart.filter((item) => item.quantity > 0));
  }

  function isItemInCart(item) {
    for (const c of cart) {
      if (c.id === item.id) return true;
    }
    return false;
  }

  function getQtyInCart(id) {
    if (isItemInCart({ id: id })) {
      return cart.find((c) => c.id === id).quantity;
    } else {
      return 0;
    }
  }

  function getTotalQtyInCart() {
    let total = 0;
    for (const c of cart) {
      total += c.quantity;
    }
    return total;
  }

  function handleRemoveFromCart(id) {
    if (isItemInCart({ id: id })) {
      setCart((prevCart) => {
        const index = cart.findIndex((c) => c.id === id);
        return [...prevCart.slice(0, index), ...prevCart.slice(index + 1)];
      });
    }
  }

  function getTotalPrice() {
    let total = 0;
    for (const c of cart) {
      total += c.quantity * c.price;
    }
    return total.toFixed(2);
  }

  return (
    <BrowserRouter>
      <NavBar totalQtyInCart={getTotalQtyInCart()} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping-cart" element={<Home />} />
        <Route
          path="/shopping-cart/music-shop"
          element={<MusicShop shopItems={shopItems} />}
        />
        <Route
          path="/shopping-cart/merch-shop"
          element={<MerchShop shopItems={shopItems} />}
        />
        <Route
          path="/shopping-cart/sale-shop"
          element={<SaleShop shopItems={shopItems} />}
        />
        <Route
          path="/shopping-cart/cart"
          element={
            <Cart
              cartItems={cart}
              getTotalQtyInCart={getTotalQtyInCart}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
              getTotalPrice={getTotalPrice}
            />
          }
        />
        <Route
          path="/shopping-cart/details"
          element={
            <Details
              handleAddToCart={handleAddToCart}
              getQtyInCart={getQtyInCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
