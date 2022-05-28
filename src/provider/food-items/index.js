import three from "../../assets/three.jpg";
import double from "../../assets/double.jpg";
import casay from "../../assets/casey.jpg";
import wings from "../../assets/wings.jpg";
import edgar from "../../assets/edgar.jpg";
import cala from "../../assets/cala.jpg";
import stick from "../../assets/stick.jpg";
import shrimp from "../../assets/shrimp.jpg";
import fish from "../../assets/fish.jpg";
import tender from "../../assets/tender.jpg";
import ros from "../../assets/ros.jpg";

export default [
  {
    id: 1,
    name: "Hat Trick Breakfast",
    description:
      "Three eggs any style, three strips of bacon or three sausage links and cups of coffees. Served with buttered bread",
    image: three,
    cost: 18.69,
    category: "Breakfast",
    star: 6,
  },
  {
    id: 2,
    name: "Double Down Breakfast",
    description:
      "Two eggs any style, two strips of bacon or two sausage links and cups of coffees. Served with buttered bread",
    image: double,
    cost: 19.85,
    category: "Breakfast",
    star: 5,
  },
  {
    id: 3,
    name: "Egg Bagel Sandwich",
    description:
      "Fried egg, American chees and diced ham, bacon stirps or a sausage patti. Munched with watered vegetable, and served with milk",
    image: casay,
    cost: 15.75,
    category: "Breakfast",
    star: 5,
  },
  {
    id: 4,
    name: "Wings & fries",
    description: "Come with fries",
    image: wings,
    cost: 18.46,
    category: "Wings & Tenders",
    star: 5,
  },
  {
    id: 5,
    name: "Pick 2 & Fries",
    description: "Comes with fries and any sauce you want",
    image: edgar,
    cost: 8.5,
    category: "Mix & Match Combos",
    star: 5,
  },
  {
    id: 6,
    name: "Hush Puppies",
    description: null,
    image: cala,
    cost: 13.97,
    category: "Mix & Match Combos",
    star: 5,
  },
  {
    id: 7,
    name: "Mozarella Sticks",
    description: "Comes with marinara sauce",
    image: stick,
    cost: 14.09,
    category: "Mix & Match Combos",
    star: 5,
  },
  {
    id: 8,
    name: "Shrimp & Fries",
    description: "Comes with fries",
    image: shrimp,
    cost: 5.02,
    category: "Fish & Shrimps",
    star: 5,
  },
  {
    id: 9,
    name: "Fish Tray",
    description: "Comes with 6 free sauce",
    image: fish,
    cost: 18.0,
    category: "Party Trays",
    star: 3,
  },
  {
    id: 10,
    name: "Tender Tray",
    description: "Comes with 6 free sauce",
    image: tender,
    cost: 5.02,
    category: "Party Trays",
    star: 3,
  },
  {
    id: 11,
    name: "Wings Tray",
    description: "Comes with 6 free sauce",
    image: ros,
    cost: 22.0,
    category: "Party Trays",
    star: 3,
  },
];
