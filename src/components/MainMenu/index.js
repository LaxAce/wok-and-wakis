import "./index.css";
import { BsClockFill } from "react-icons/bs";
import { RiEditBoxLine } from "react-icons/ri";
import { HiShoppingCart } from "react-icons/hi";

const MainMenu = ({ mini }) => {
  return (
    <div className={mini ? "main-menu mini" : "main-menu"}>
      <div className="cta">
        <button type="button" className="btn delivery active">
          Delivery
        </button>
        <button type="button" className="btn pickup ">
          Pickup
        </button>
      </div>
      <div className="interval">
        <BsClockFill size={18} />
        <p>ASAP - Ready in 25 - 40 mins</p>
        <RiEditBoxLine size={18} />
      </div>
      <button className="btn cart">
        <HiShoppingCart size={22} />
        <span>3</span>
      </button>
    </div>
  );
};

export default MainMenu;
