import ShopItem from "./ShopItem";
import "../styles/Shop.css";

function MerchShop(props) {
  const merchItems = props.shopItems.filter(
    (item) => item.category === "merch"
  );
  return (
    <div className="merch-shop">
      <h2>Merch</h2>
      <div className="items-container">
        {merchItems.map((item) => (
          <ShopItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default MerchShop;
