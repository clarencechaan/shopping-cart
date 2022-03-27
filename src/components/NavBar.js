import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import cart from "../images/shopping-cart.png";

function NavBar(props) {
  const { totalQtyInCart } = props;
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
      <Link to="/cart" className="cart-logo">
        <img src={cart} alt="cart" />
        {totalQtyInCart ? (
          <div className="cart-badge visible">{totalQtyInCart}</div>
        ) : (
          <div className="cart-badge hidden"></div>
        )}
      </Link>
    </nav>
  );
}

export default NavBar;
