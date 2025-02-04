const products = [
  { id: 1, name: "Smartphone", category: "electronics", price: 500, rating: 4.5, image: "images/smartphone.jpg" },
  { id: 2, name: "Laptop", category: "electronics", price: 900, rating: 4.8, image: "images/laptop.jpg" },
  { id: 3, name: "T-shirt", category: "clothing", price: 20, rating: 4.0, image: "images/tshirt.jpg" },
  { id: 4, name: "Headphones", category: "accessories", price: 100, rating: 4.3, image: "images/headphones.jpg" },
  { id: 5, name: "Wrist Watch", category: "accessories", price: 250, rating: 4.6, image: "images/wristwatch.jpg" },
  { id: 6, name: "Jeans", category: "clothing", price: 40, rating: 4.2, image: "images/jeans.jpg" },
  { id: 7, name: "Tablet", category: "electronics", price: 300, rating: 4.4, image: "images/tablet.jpg" }
];

const productContainer = document.getElementById("product-list");
const categoryFilter = document.getElementById("category");
const priceFilter = document.getElementById("price");
const priceValue = document.getElementById("priceValue");
const sortFilter = document.getElementById("sort");

let cart = [];

function displayProducts(filteredProducts) {
  productContainer.innerHTML = "";
  filteredProducts.forEach(product => {
      productContainer.innerHTML += `
          <div class="product-card">
              <img src="${product.image}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p>Price: $${product.price}</p>
              <p>Rating: ⭐${product.rating}</p>
              <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
          </div>
      `;
  });

  // Add event listeners to "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach(button => {
      button.addEventListener("click", addToCart);
  });
}

function addToCart(event) {
  const productId = parseInt(event.target.getAttribute("data-id"));
  const product = products.find(item => item.id === productId);

  if (product) {
      cart.push(product);
      alert(`${product.name} has been added to your cart!`);
  }
}

function filterAndSortProducts() {
  let filteredProducts = products.filter(product => {
      return (categoryFilter.value === "all" || product.category === categoryFilter.value) &&
          product.price <= priceFilter.value;
  });

  if (sortFilter.value === "high") {
      filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortFilter.value === "low") {
      filteredProducts.sort((a, b) => a.rating - b.rating);
  }

  displayProducts(filteredProducts);
}

categoryFilter.addEventListener("change", filterAndSortProducts);
priceFilter.addEventListener("input", () => {
  priceValue.textContent = priceFilter.value;
  filterAndSortProducts();
});
sortFilter.addEventListener("change", filterAndSortProducts);

displayProducts(products);
