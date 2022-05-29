import "./index.css";
import { useState } from "react";

// Components
import ItemModal from "../../components/ItemModal";
import PartyTrays from "../../components/PartyTrays";
import PopularItems from "../../components/PopularItems";
import WindsAndTenders from "../../components/WingsAndTenders";

// Provider
import foodItems from "../../provider/food-items";

const Items = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [sectionOne, setSectionOne] = useState(false);
  const [sectionTwo, setSectionTwo] = useState(false);
  const [sectionThree, setSectionThree] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleClickItem = (id) => {
    const currentItem = foodItems.find((item) => item.id === id);
    if (currentItem) {
      setActiveItem(currentItem);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveItem(null);
    setSectionOne(false);
    setSectionTwo(false);
    setSectionThree(false);
    setQuantity(1);
  };

  const handleSectionOne = () => setSectionOne(!sectionOne);
  const handleSectionTwo = () => setSectionTwo(!sectionTwo);
  const handleSectionThree = () => setSectionThree(!sectionThree);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <section className="items-section">
      <PopularItems foodItems={foodItems} handleClickItem={handleClickItem} />
      <WindsAndTenders
        foodItems={foodItems}
        handleClickItem={handleClickItem}
      />
      <PartyTrays foodItems={foodItems} handleClickItem={handleClickItem} />
      <ItemModal
        showModal={showModal}
        closeModal={closeModal}
        activeItem={activeItem}
        sectionOne={sectionOne}
        sectionTwo={sectionTwo}
        quantity={quantity}
        sectionThree={sectionThree}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        handleSectionOne={handleSectionOne}
        handleSectionTwo={handleSectionTwo}
        handleSectionThree={handleSectionThree}
      />
    </section>
  );
};

export default Items;
