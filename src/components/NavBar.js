import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import cart from "../images/shopping-cart.png";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/" className="logo">
        auditty
      </Link>
      <div>
        <Link to="/" className="nav-link">
          HOME
        </Link>
        <Link to="/music-shop" className="nav-link">
          MUSIC
        </Link>
        <Link to="/merch-shop" className="nav-link">
          MERCH
        </Link>
        <Link to="/sale-shop" className="nav-link" style={{ color: "red" }}>
          SALE
        </Link>
      </div>
      <Link to="/cart" className="cart">
        <img src={cart} alt="cart" />
        <div className="cart-badge">1</div>
      </Link>
    </nav>
  );
}

export default NavBar;
