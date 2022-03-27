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

  function handleAddToCart(item, quantity) {}

  return (
    <BrowserRouter>
      <NavBar />
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
        <Route path="/cart" element={<Cart />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
