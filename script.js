// Product data
const products = [
  { name: "AI Solar Max 400W", price: 2800, img: "https://images.unsplash.com/photo-1584270354949-1b8a7a212d5d?auto=format&fit=crop&w=800" },
  { name: "SmartPanel Ultra 600W", price: 4500, img: "https://images.unsplash.com/photo-1592813630411-68cf16ff49fc?auto=format&fit=crop&w=800" },
  { name: "EcoLite 300W", price: 1950, img: "https://images.unsplash.com/photo-1603791452906-c4c7b1de1b37?auto=format&fit=crop&w=800" },
  { name: "SunPro AI Hybrid 800W", price: 6500, img: "https://images.unsplash.com/photo-1608330903957-8a09a0d6d3b2?auto=format&fit=crop&w=800" },
  { name: "Solar Charging Lamp", price: 250, img: "https://images.unsplash.com/photo-1603791452906-c4c7b1de1b37?auto=format&fit=crop&w=800" },
  { name: "Solar Inverter 5KW", price: 8900, img: "https://images.unsplash.com/photo-1584270354949-1b8a7a212d5d?auto=format&fit=crop&w=800" },
  { name: "Portable Solar Generator", price: 3500, img: "https://images.unsplash.com/photo-1603791452906-c4c7b1de1b37?auto=format&fit=crop&w=800" },
];

// Display products
const productList = document.getElementById("productList");
if (productList) {
  products.forEach((p, i) => {
    productList.innerHTML += `
      <div class="product-card">
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p class="price">₵ ${p.price}</p>
        <button class="btn" onclick="addToCart(${i})">Add to Cart</button>
      </div>
    `;
  });
}

// Cart functionality
let cart = [];
const cartPanel = document.getElementById("cart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartBtn = document.getElementById("cartBtn");
const clearCartBtn = document.getElementById("clearCartBtn");

function addToCart(index) {
  cart.push(products[index]);
  updateCart();
}

function removeItem(i) {
  cart.splice(i, 1);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, i) => {
    total += item.price;
    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name}</span>
        <span>₵${item.price}</span>
        <button onclick="removeItem(${i})">x</button>
      </div>`;
  });
  cartTotal.textContent = `₵ ${total}`;
}

if (cartBtn) {
  cartBtn.onclick = () => {
    cartPanel.style.display = cartPanel.style.display === "block" ? "none" : "block";
  };
}

if (clearCartBtn) {
  clearCartBtn.onclick = () => {
    cart = [];
    updateCart();
  };
}

// Checkout modal
const checkoutBtn = document.getElementById("checkoutBtn");
const checkoutModal = document.getElementById("checkoutModal");
const closeCheckout = document.getElementById("closeCheckout");

if (checkoutBtn && checkoutModal) {
  checkoutBtn.onclick = () => checkoutModal.style.display = "flex";
  closeCheckout.onclick = () => checkoutModal.style.display = "none";
  window.onclick = (e) => { if (e.target === checkoutModal) checkoutModal.style.display = "none"; };
}

// Login name in navbar
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const username = localStorage.getItem("username");

if (username && loginBtn) {
  loginBtn.outerHTML = `<a href="account.html" id="userName">${username}</a>`;
  if (signupBtn) signupBtn.outerHTML = "";
}
