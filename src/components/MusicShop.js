import ShopItem from "./ShopItem";
import "../styles/Shop.css";

function MusicShop(props) {
  const musicItems = props.shopItems.filter(
    (item) => item.category === "music"
  );
  console.log(musicItems);
  return (
    <div className="music-shop">
      <h2>Music</h2>
      <div className="items-container">
        {musicItems.map((item) => (
          <ShopItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default MusicShop;
