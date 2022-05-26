import "./index.css";
import { useState } from "react";

// Components
import Navbar from "../../components/Navbar";
import MainMenu from "../../components/MainMenu";

// Image
import hero from "../../assets/lily.jpg";

const Hero = () => {
  const [mini, setMini] = useState(false);

  const handleMenu = () => {
    setMini(!mini);
  };

  return (
    <div className="hero">
      <Navbar handleMenu={handleMenu} mini={mini} />
      {mini ? <MainMenu mini={mini} /> : null}
      <img src={hero} className="hero-img" alt="meat and salad with onions" />
      <div className="hero-content">
        <h2>Kings family restaurant - Butler</h2>
        <p className="address">
          1322 Lazy Alley, Philadelphia, CA 30203, USA <a href="">More info</a>
        </p>
        <p className="offers">
          Bakery - Breakfast &#38; Brunch - Cafe - Coffees
        </p>
        <p className="open-hours">Open Hours: 8:30AM - 7:00PM</p>
      </div>
    </div>
  );
};

export default Hero;
