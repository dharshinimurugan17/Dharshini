const express = require("express");
constcors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const products = [
  { id: 1, name: "T-Shirt", price: 499 },
  { id: 2, name: "Jeans", price: 899 },
  { id: 3, name: "Shoes", price: 1299 },
];
app.get("/api/products", (req, res) => {
res.json(products);
});
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
