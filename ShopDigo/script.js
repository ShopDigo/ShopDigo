
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("productGrid");
  const searchBar = document.getElementById("searchBar");
  const categoryFilter = document.getElementById("categoryFilter");
  const sortPrice = document.getElementById("sortPrice");

  function displayProducts(items) {
    grid.innerHTML = "";
    items.forEach(p => {
      grid.innerHTML += \`
        <div class="product-card">
          <img src="\${p.image}" alt="\${p.name}" />
          <h3>\${p.name}</h3>
          <p>₹\${p.price}</p>
          <button>Add to Cart</button>
        </div>\`;
    });
  }

  let filtered = [...products];
  displayProducts(filtered);

  searchBar.addEventListener("input", () => {
    const val = searchBar.value.toLowerCase();
    const temp = filtered.filter(p => p.name.toLowerCase().includes(val));
    displayProducts(temp);
  });

  categoryFilter.addEventListener("change", () => {
    const val = categoryFilter.value;
    filtered = val === "all" ? [...products] : products.filter(p => p.category === val);
    displayProducts(filtered);
  });

  sortPrice.addEventListener("change", () => {
    const val = sortPrice.value;
    if (val === "low") filtered.sort((a,b) => a.price - b.price);
    else if (val === "high") filtered.sort((a,b) => b.price - a.price);
    displayProducts(filtered);
  });
});
