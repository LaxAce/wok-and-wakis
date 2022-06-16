import "./App.css";
import Cart from "./components/Cart";
import { Hero, FoodMenu, Items, Footer } from "./containers";
import { useCartContext } from "./context";

function App() {
  const { showCart } = useCartContext();

  return (
    <div className="App">
      <Hero />
      <FoodMenu />
      <Items />
      <Footer />
      {showCart && <Cart />}
    </div>
  );
}

export default App;
