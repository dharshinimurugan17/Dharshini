const products = [
  { id: 1, name: "T-Shirt", price: 499 },
  { id: 2, name: "Jeans", price: 899 },
  { id: 3, name: "Shoes", price: 1299 },
];
function ProductList({ addToCart }) {
  return (
<div className="products">
      {products.map((p) => (
<div key={p.id} className="product">
<h3>{p.name}</h3>
<p>₹{p.price}</p>
<button onClick={() =>addToCart(p)}>Add to Cart</button>
</div>
      ))}
</div>
  );
}
export default ProductList;
