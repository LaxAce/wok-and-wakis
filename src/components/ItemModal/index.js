import "./index.css";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import { Checkbox } from "pretty-checkbox-react";

const ItemModal = ({
  activeItem,
  showModal,
  closeModal,
  sectionOne,
  sectionTwo,
  sectionThree,
  handleSectionOne,
  handleSectionTwo,
  handleSectionThree,
}) => {
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
                  value="over-easy"
                />
                <label htmlFor="over-easy">Over Easy</label>
              </div>
              <div className="input-deco">
                <input
                  type="radio"
                  id="over-hard"
                  name="egg"
                  value="over-hard"
                />
                <label htmlFor="over-hard">Over Hard</label>
              </div>
              <div className="input-deco">
                <input
                  type="radio"
                  id="over-medium"
                  name="egg"
                  value="over-medium"
                />
                <label htmlFor="over-medium">Over Medium</label>
              </div>
              <div className="input-deco">
                <input
                  type="radio"
                  id="scrambled"
                  name="egg"
                  value="scrambled"
                  defaultChecked
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
                  />
                  <label htmlFor="add-cheddar">Add Cheddar</label>
                </div>
                <span>+$2.50</span>
              </div>
              <div className="input-deco check">
                <div>
                  <input
                    type="checkbox"
                    id="add-pepper-jack"
                    name="cheese"
                    value="add-pepper-jack"
                  />
                  <label htmlFor="add-pepper-jack">Add Pepper Jack</label>
                </div>
                <span>+$2.50</span>
              </div>
              <div className="input-deco check">
                <div>
                  <input
                    type="checkbox"
                    id="add-provolone"
                    name="cheese"
                    value="add-provolone"
                  />
                  <label htmlFor="add-provolone">Add Provolone</label>
                </div>
                <span>+$2.50</span>
              </div>
              <div className="input-deco check">
                <div>
                  <input
                    type="checkbox"
                    id="add-swiss"
                    name="cheese"
                    value="add-swiss"
                    defaultChecked
                  />
                  <label htmlFor="add-swiss">Add Swiss</label>
                </div>
                <span>+$2.50</span>
              </div>
              <Checkbox shape="curve" variant="thick">
                Curved Thick
              </Checkbox>
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
            <button className="btn subtract">&mdash;</button>
            <div className="counter">1</div>
            <button className="btn increment">+</button>
          </div>
          <button className="btn cta" onClick={closeModal}>
            Add to cart - <span>$12.55</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
