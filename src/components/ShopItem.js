import { Link } from "react-router-dom";

function ShopItem(props) {
  const { title, imgURL, price } = props.item;
  return (
    <div className="shop-item">
      <Link to="/details" state={props.item}>
        <img src={imgURL} alt="" className="shop-item-img" />
      </Link>
      <div className="shop-title">{title}</div>
      <div className="shop-price">${price}</div>
    </div>
  );
}

export default ShopItem;
