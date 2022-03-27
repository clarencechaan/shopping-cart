import ShopItem from "./ShopItem";
import "../styles/Shop.css";

function SaleShop(props) {
  const saleItems = props.shopItems.filter((item) => item.onSale === true);
  return (
    <div className="sale-shop">
      <h2>Sale</h2>
      <div className="items-container">
        {saleItems.map((item) => (
          <ShopItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default SaleShop;
