import "./index.css";
import { useEffect, useState } from "react";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";

// Context
import { useCartContext } from "../../context";

const ItemModal = ({
  activeItem,
  showModal,
  closeModal,
  sectionOne,
  sectionTwo,
  quantity,
  sectionThree,
  handleIncrease,
  handleDecrease,
  handleSectionOne,
  handleSectionTwo,
  handleSectionThree,
}) => {
  const { addToCart } = useCartContext();
  const [cost, setCost] = useState(0);
  const [checkData, setCheckData] = useState({
    "add-cheddar": false,
    "add-swiss": true,
    "add-pepper-jack": false,
    "add-provolone": false,
  });
  const [cheese, SetCheese] = useState('Scrambled')

  const handleAddCart = () => {
    const addOns = []
    const asArray = Object.entries(checkData);

    asArray.map(([key, value]) => {
      if (value) {
        const toUppercase = key[0].toUpperCase() + key.substring(1)
        const splitted = toUppercase.split('-').join(' ')
        addOns.push(splitted)
      }
    })
    addToCart({...activeItem, quantity, cost, addOns, cheese });
    closeModal();
    setCheckData({
      "add-cheddar": false,
      "add-swiss": true,
      "add-pepper-jack": false,
      "add-provolone": false,
    })
  };

  useEffect(() => {
    const roundedCost = Math.round(activeItem?.cost * quantity * 100) / 100
    setCost(roundedCost)
  }, [activeItem, quantity])

  const handleCheckbox = (e) => {
     setCheckData({ ...checkData, [e.target.value]: e.target.checked });
  };

  const handleRadio = (e) => {
    SetCheese(e.target.value)
  }

  return (
    <div
      onClick={closeModal}
      className={showModal ? "modal delete-modal" : "modal delete-modal hidden"}
    >
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <div className="modal-header">
          <RiCloseLine className="btn btn-close" onClick={closeModal} />
          <h1>{activeItem?.name}</h1>
        </div>
        <div className="modal-body">
          <div className="img-container">
            <img
              src={activeItem?.image}
              alt={activeItem?.name}
              className="modal-img"
            />
          </div>
          <div className="body-content">
            <h2>{activeItem?.name}</h2>
            <p className="description">{activeItem?.description}</p>
          </div>
          <div className="control ">
            <div>
              <h3 className="required">Egg Style</h3>
              <span>Select 1</span>
            </div>
            <button className="btn" onClick={handleSectionOne}>
              {sectionOne ? (
                <RiArrowDropDownLine size={34} className="arrow-down" />
              ) : (
                <RiArrowDropRightLine size={34} className="arrow-down" />
              )}
            </button>
          </div>
          {sectionOne && (
            <div className="form body-content">
              <div className="input-deco">
                <input
                  type="radio"
                  id="over-easy"
                  name="egg"
                  value="Over Easy"
                  onClick={handleRadio}
                />
                <label htmlFor="over-easy">Over Easy</label>
              </div>
              <div className="input-deco">
                <input
                  type="radio"
                  id="over-hard"
                  name="egg"
                  value="Over Hard"
                  onClick={handleRadio}
                />
                <label htmlFor="over-hard">Over Hard</label>
              </div>
              <div className="input-deco">
                <input
                  type="radio"
                  id="over-medium"
                  name="egg"
                  value="Over Medium"
                  onClick={handleRadio}
                />
                <label htmlFor="over-medium">Over Medium</label>
              </div>
              <div className="input-deco">
                <input
                  type="radio"
                  id="scrambled"
                  name="egg"
                  value="Scrambled"
                  defaultChecked
                  onClick={handleRadio}
                />
                <label htmlFor="scrambled">Scrambled</label>
              </div>
            </div>
          )}
          <div className="control">
            <div>
              <h3>Add Cheese</h3>
              <span>Select up to 3</span>
            </div>
            <button className="btn" onClick={handleSectionTwo}>
              {sectionTwo ? (
                <RiArrowDropDownLine size={34} className="arrow-down" />
              ) : (
                <RiArrowDropRightLine size={34} className="arrow-down" />
              )}
            </button>
          </div>
          {sectionTwo && (
           <div className="form body-content">
             <div className="input-deco check">
               <div>
                 <input
                   type="checkbox"
                   id="add-cheddar"
                   name="cheese"
                   value="add-cheddar"
                   onChange={handleCheckbox}
                 />
                 <label htmlFor="add-cheddar">Add Cheddar</label>
               </div>
               <span className={checkData["add-cheddar"] ? "active" : 'not-active'}>+$2.50</span>
             </div>
             <div className="input-deco check">
               <div>
                 <input
                   type="checkbox"
                   id="add-pepper-jack"
                   name="cheese"
                   value="add-pepper-jack"
                   onChange={handleCheckbox}
                 />
                 <label htmlFor="add-pepper-jack">Add Pepper Jack</label>
               </div>
               <span className={checkData["add-pepper-jack"] ? "active" : 'not-active'}>+$1.50</span>
             </div>
             <div className="input-deco check">
               <div>
                 <input
                   type="checkbox"
                   id="add-provolone"
                   name="cheese"
                   value="add-provolone"
                   onChange={handleCheckbox}
                 />
                 <label htmlFor="add-provolone">Add Provolone</label>
               </div>
               <span className={checkData["add-provolone"] ? "active" : 'not-active'}>+$5.00</span>
             </div>
             <div className="input-deco check">
               <div>
                 <input
                   type="checkbox"
                   id="add-swiss"
                   name="cheese"
                   value="add-swiss"
                   defaultChecked
                   onChange={handleCheckbox}
                 />
                 <label htmlFor="add-swiss">Add Swiss</label>
               </div>
               <span className={checkData["add-swiss"] ? "active" : 'not-active'}>+$3.00</span>
             </div>
           </div>
         )}
          <div className="control">
            <div>
              <h3>Special instructions</h3>
              <span>Leave a note for the kitchen</span>
            </div>
            <button className="btn" onClick={handleSectionThree}>
              {sectionThree ? (
                <RiArrowDropDownLine size={34} className="arrow-down" />
              ) : (
                <RiArrowDropRightLine size={34} className="arrow-down" />
              )}
            </button>
          </div>
          {sectionThree && (
            <div className="form body-content">
              <textarea
                className="note"
                id="note"
                name="note"
                rows="7"
                placeholder="e.g allergies, extra spicy, etc"
              ></textarea>
              <div className="select-container">
                <label htmlFor="select">If sold out, </label>
                <select name="reco" id="reco">
                  <option value="">Go with merchant recommendation</option>
                  <option value="add-provolone">Add Provolone</option>
                  <option value="add-swiss">Add Swiss</option>
                </select>
              </div>
            </div>
          )}
        </div>
        <div className="modal-footer">
          <div className="footer-left">
            <button className="btn subtract" onClick={handleDecrease}>
              &mdash;
            </button>
            <div className="counter">{quantity}</div>
            <button className="btn increment" onClick={handleIncrease}>
              +
            </button>
          </div>
          <button className="btn cta" onClick={handleAddCart}>
            Add to cart - <span>${cost}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
