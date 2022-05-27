import "./index.css";
import { useState } from "react";

// Components
import PartyTrays from "../../components/PartyTrays";
import PopularItems from "../../components/PopularItems";
import WindsAndTenders from "../../components/WingsAndTenders";

// Provider
import foodItems from "../../provider/food-items";

const Items = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleClickItem = (id) => {
    const currentItem = foodItems.find((item) => item.id == id);
    if (currentItem) setActiveItem(currentItem);
  };

  return (
    <section className="items-section">
      <PopularItems foodItems={foodItems} handleClickItem={handleClickItem} />
      <WindsAndTenders
        foodItems={foodItems}
        handleClickItem={handleClickItem}
      />
      <PartyTrays foodItems={foodItems} handleClickItem={handleClickItem} />
    </section>
  );
};

export default Items;
