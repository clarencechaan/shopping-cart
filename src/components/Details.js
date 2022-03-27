import { useLocation } from "react-router-dom";
import Select from "react-select";
import "../styles/Details.css";

function Details() {
  const location = useLocation();
  const item = location.state;

  console.log(item);

  return (
    <div className="details">
      <img src={item.imgURL} alt="" className="details-img" />
      <div className="details-info">
        <div className="details-title">{item.title}</div>
        <div className="details-price">${item.price}</div>
        <Select
          required
          className="quantity"
          placeholder={<div>Quantity</div>}
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
        <button className="add-to-cart">ADD TO CART</button>
      </div>
    </div>
  );
}

export default Details;
