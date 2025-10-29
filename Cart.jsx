function Cart({ cart, removeFromCart }) {
const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
<div className="cart">
<h2>Cart Items</h2>
      {cart.length === 0 ? (
<p>No items in cart</p>
      ) : (
cart.map((item) => (
<div key={item.id} className="cart-item">
<span>{item.name}</span>
<span>Qty: {item.quantity}</span>
<span>₹{item.price * item.quantity}</span>
<button onClick={() =>removeFromCart(item.id)}>Remove</button>
</div>
        ))
      )}
<h3>Total: ₹{total}</h3>
</div>
  );
}
export default Cart;
