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

  // function addQty(id, qty) {
  //   setCart((prevCart) => {
  //     const prevCartItem = prevCart.find((c) => c.id === id);
  //     const newCartItem = {
  //       ...prevCartItem,
  //       quantity: prevCartItem.quantity + 1,
  //     };
  //     const index = prevCart.findIndex((c) => c.id === id);
  //     return [
  //       ...prevCart.slice(0, index),
  //       newCartItem,
  //       ...prevCart.slice(index + 1),
  //     ];
  //   });
  // }

  console.log(cart);

  return (
    <BrowserRouter>
      <NavBar totalQtyInCart={getTotalQtyInCart()} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/music-shop"
          element={<MusicShop shopItems={shopItems} />}
        />
        <Route
          path="/merch-shop"
          element={<MerchShop shopItems={shopItems} />}
        />
        <Route path="/sale-shop" element={<SaleShop shopItems={shopItems} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cart}
              getTotalQtyInCart={getTotalQtyInCart}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/details"
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
