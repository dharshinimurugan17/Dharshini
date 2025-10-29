import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
const [cart, setCart] = useState([]);

constaddToCart = (product) => {
const existing = cart.find((item) => item.id === product.id);
    if (existing) {
setCart(
cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

constremoveFromCart = (id) => {
setCart(cart.filter((item) => item.id !== id));
  };

  return (
<div className="container">
<h1>E-Commerce Cart System</h1>
<ProductListaddToCart={addToCart} />
<Cart cart={cart} removeFromCart={removeFromCart} />
</div>
  );
}

export default App;
