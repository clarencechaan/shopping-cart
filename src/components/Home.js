import "../styles/Home.css";
import record from "../images/record.jpg";
import merch from "../images/merch.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="shop-music">
        <Link to="/shopping-cart/music-shop" className="shop-button-link">
          <button className="shop-button">SHOP MUSIC</button>
        </Link>
        <div
          className="shop-music-background"
          style={{
            backgroundImage: `url(${record})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="white-overlay"></div>
        </div>
      </div>
      <div className="shop-merch">
        <Link to="/shopping-cart/merch-shop" className="shop-button-link">
          <button className="shop-button">SHOP MERCH</button>
        </Link>
        <div
          className="shop-merch-background"
          style={{
            backgroundImage: `url(${merch})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="white-overlay"></div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Home;
