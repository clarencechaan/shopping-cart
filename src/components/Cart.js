import CartItem from "./CartItem";
import "../styles/Cart.css";
import cartLogo from "../images/shopping-cart-white.png";

function Cart(props) {
  return (
    <div className="cart">
      <h2>Your Cart ({props.getTotalQtyInCart()})</h2>
      <div className="cart-items-container">
        {props.cartItems.map((item) => (
          <CartItem
            item={item}
            handleAddToCart={props.handleAddToCart}
            handleRemoveFromCart={props.handleRemoveFromCart}
            key={item.id}
          />
        ))}
      </div>
      <div className="total">
        <img src={cartLogo} alt="" className="total-cart-logo" />$
        {props.getTotalPrice()}
      </div>
    </div>
  );
}

export default Cart;
