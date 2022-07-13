import "./index.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";

// component
import CartItem from "../CartItem";

// context
import { useCartContext } from "../../context";

const Cart = () => {
  const { cart, handleShowCart, checkOut, totalCost } = useCartContext();

  return (
    <div onClick={handleShowCart} className="cart-modal">
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <header className="modal-header">
          <RiCloseLine className="btn btn-close" onClick={handleShowCart} />
          <h1>Your Order</h1>
        </header>
        {cart.length > 0 ? (
          <div className="modal-body">
            <div className="order-note">
              <h2>This is a pickup order</h2>
              <p>
                You'll need to go to the Kings Family Restaurant to pickup the
                order.
              </p>
            </div>
            <div className="pick-up">
              <p>
                Pick up at <span>191 New Castle Road</span>
              </p>
              <RiArrowDropDownLine size={35} className="icon" />
            </div>

            <ul className="order-list">
              {cart.map((item) => {
                const { id, quantity, name, addOns, cost, cheese } = item;

                return (
                  <CartItem
                    key={id}
                    id={id}
                    quantity={quantity}
                    name={name}
                    addOns={addOns}
                    cost={cost}
                    cheese={cheese}
                  />
                );
              })}
            </ul>
          </div>
        ) : (
          <h2 className="alert">No item in the cart at this time</h2>
        )}

        {cart.length > 0 && <div className="modal-footer">
          <button onClick={checkOut}>
            <span>Checkout</span> <span>${totalCost}</span>{" "}
          </button>
        </div>}
      </div>
    </div>
  );
};

export default Cart;
