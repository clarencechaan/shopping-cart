function CartItem(props) {
  const { title, imgURL, price, quantity } = props.item;
  const handleAddToCart = props.handleAddToCart;
  console.log(props);
  return (
    <div className="cart-item">
      <img src={imgURL} alt="" className="cart-item-img" />
      <div className="quantity-control">
        <button type="button" onClick={() => handleAddToCart(props.item, -1)}>
          -
        </button>
        <div className="quantity-label">{quantity}</div>
        <button type="button" onClick={() => handleAddToCart(props.item, 1)}>
          +
        </button>
      </div>
      <div className="cart-title">{title}</div>
      <div className="cart-price">${price}</div>
    </div>
  );
}
export default CartItem;
