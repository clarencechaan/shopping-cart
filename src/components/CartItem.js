import { Link } from "react-router-dom";
import trash from "../images/trash.png";

function CartItem(props) {
  const { title, imgURL, price, quantity, id } = props.item;
  const handleAddToCart = props.handleAddToCart;
  const handleRemoveFromCart = props.handleRemoveFromCart;
  return (
    <div className="cart-item">
      <Link to="/shopping-cart/details" state={props.item}>
        <img src={imgURL} alt="" className="cart-item-img" />
      </Link>
      <div className="quantity-control">
        <button type="button" onClick={() => handleAddToCart(props.item, -1)}>
          -
        </button>
        <div className="quantity-label" data-testid="quantity-label">
          {quantity}
        </div>
        <button type="button" onClick={() => handleAddToCart(props.item, 1)}>
          +
        </button>
        <img
          src={trash}
          alt="remove"
          className="remove"
          onClick={() => handleRemoveFromCart(id)}
        />
      </div>
      <div className="cart-title">{title}</div>
      <div className="cart-price">${price}</div>
    </div>
  );
}
export default CartItem;
