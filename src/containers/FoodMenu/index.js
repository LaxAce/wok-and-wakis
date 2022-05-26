import "./index.css";
import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

// Components
import MenuList from "../../components/MenuList";

// Provider
import foodMenu from "../../provider/food-menu";

const FoodMenu = () => {
  const [active, setActive] = useState(0);

  const handleSelect = (id) => setActive(id);

  const activeMenu = foodMenu.find((menu, i) => i == active);

  return (
    <section className="food-menu">
      <div className="left">
        <AiOutlineBars className="line-bar" size={26} />
        <ul className="menu-list">
          {foodMenu.map((menu, i) => (
            <MenuList
              key={i}
              i={i}
              handleSelect={handleSelect}
              menu={menu}
              activeMenu={activeMenu}
            />
          ))}
        </ul>
      </div>
      <IoIosArrowForward className="arrow" size={18} />
    </section>
  );
};

export default FoodMenu;
