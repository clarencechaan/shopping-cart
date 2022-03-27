import { useLocation } from "react-router-dom";
import Select from "react-select";
import { useState } from "react";
import "../styles/Details.css";

function Details(props) {
  const location = useLocation();
  const item = location.state;

  const [quantity, setQuantity] = useState(1);
  const [qtyInCart, setQtyInCart] = useState(props.getQtyInCart(item.id));

  const [active, setActive] = useState(true);

  return (
    <div className="details">
      <img src={item.imgURL} alt="" className="details-img" />
      <div className="details-info">
        {qtyInCart ? (
          <div className="qty-in-cart">{qtyInCart} IN CART</div>
        ) : (
          <div className="qty-in-cart"></div>
        )}
        <div className="details-title">{item.title}</div>
        <div className="details-price">${item.price}</div>
        <Select
          required
          className="quantity"
          onChange={(e) => {
            setQuantity(e.value);
            setActive(true);
          }}
          defaultValue={{ value: 1, label: 1 }}
          options={[
            { value: 1, label: 1 },
            { value: 2, label: 2 },
            { value: 3, label: 3 },
            { value: 4, label: 4 },
            { value: 5, label: 5 },
            { value: 6, label: 6 },
            { value: 7, label: 7 },
            { value: 8, label: 8 },
            { value: 9, label: 9 },
          ]}
        />
        {active ? (
          <button
            className="add-to-cart active"
            onClick={() => {
              props.handleAddToCart(item, quantity);
              setQtyInCart((prevQtyInCart) => prevQtyInCart + quantity);
              setActive(false);
            }}
          >
            ADD TO CART
          </button>
        ) : (
          <button className="add-to-cart inactive" disabled>
            ITEM ADDED
          </button>
        )}
      </div>
    </div>
  );
}

export default Details;
