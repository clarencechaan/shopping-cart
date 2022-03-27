import CartItem from "./CartItem";
import "../styles/Cart.css";

function Cart(props) {
  return (
    <div className="cart">
      <h2>Your Cart ({props.getTotalQtyInCart()})</h2>
      <div className="cart-items-container">
        {props.cartItems.map((item) => (
          <CartItem
            item={item}
            handleAddToCart={props.handleAddToCart}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;
