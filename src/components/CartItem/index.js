import "./index.css";
import { RiArrowDropDownLine } from "react-icons/ri";

// context
import { useCartContext } from "../../context";

const CartItem = ({id, quantity, name, addOns, cost, cheese}) => {
  const {removeFromCart} = useCartContext()
  return (
    <li className="cart-item-page" key={id}>
      <div className="quantity">
        <div> <span>{quantity}</span> <RiArrowDropDownLine size={35} className="icon" /> </div>
        <button onClick={() => removeFromCart(id)}>Remove</button>
      </div>
      <div className="item-body">
        <h3>{name}</h3>
        
        <ul>
        { addOns.map((item, i) => (
          <li key={i}>{item}, </li>
        ))}
        </ul>
        <p>{cheese}</p>
      </div>
      <h3>${cost}</h3>
    </li>
  );
};

export default CartItem;
