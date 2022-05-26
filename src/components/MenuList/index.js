import "./index.css";

const MenuList = ({ menu, activeMenu, handleSelect, i }) => {
  return (
    <li
      onClick={() => handleSelect(i)}
      className={menu == activeMenu ? "active" : ""}
    >
      {menu}
    </li>
  );
};

export default MenuList;
