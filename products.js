
const products = [
  { name: "T-Shirt", price: 499 },
  { name: "Jeans", price: 999 },
  { name: "Jacket", price: 1499 }
];
const grid = document.getElementById("productGrid");
if (grid) {
  products.forEach(p => {
    const div = document.createElement("div");
    div.textContent = `${p.name} - ₹${p.price}`;
    grid.appendChild(div);
  });
}
