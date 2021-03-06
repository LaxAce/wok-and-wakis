import "./index.css";
import { useState } from "react";
import { BsClockFill } from "react-icons/bs";
import { RiEditBoxLine } from "react-icons/ri";
import { HiShoppingCart } from "react-icons/hi";

// Context
import { useCartContext } from "../../context";

const MainMenu = ({ mini }) => {
  const [active, setActive] = useState("pickup");
  const { cart, handleShowCart } = useCartContext();

  const handleActive = (state) => {
    setActive(state);
  };

  return (
    <div className={mini ? "main-menu mini" : "main-menu"}>
      <div className="cta">
        <button
          onClick={() => handleActive("delivery")}
          type="button"
          className={
            active == "delivery" ? "btn delivery active" : "btn delivery"
          }
        >
          Delivery
        </button>
        <button
          onClick={() => handleActive("pickup")}
          type="button"
          className={active == "pickup" ? "btn pickup active" : "btn pickup"}
        >
          Pickup
        </button>
      </div>
      <div className="interval">
        <BsClockFill size={18} />
        <p>ASAP - Ready in 25 - 40 mins</p>
        <RiEditBoxLine size={18} />
      </div>
      <button onClick={handleShowCart} className="btn cart">
        <HiShoppingCart size={22} />
        <span>{cart.length}</span>
      </button>
    </div>
  );
};

export default MainMenu;
