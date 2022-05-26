import "./index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

// Components
import MainMenu from "../MainMenu";

const Navbar = ({ handleMenu, mini }) => {
  return (
    <nav className="nav">
      <div className="logo">wok &#38; wakis</div>
      <MainMenu />
      <div className="toggle-menu ">
        {mini ? (
          <AiOutlineClose onClick={handleMenu} size={22} />
        ) : (
          <GiHamburgerMenu onClick={handleMenu} size={22} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
