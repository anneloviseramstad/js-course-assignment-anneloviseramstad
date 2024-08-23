let cart = [];

document.addEventListener("DOMContentLoaded", function () {
  fetchProducts();
});

async function fetchProducts() {
  try {
    const response = await fetch("https://api.noroff.dev/api/v1/rainy-days/");
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error("Failed to upload.", error);
  }
}

function displayProducts(products) {
  const container = document.getElementById("products");
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classname = "product.item";
    productDiv.innerHTML = `
            <img src="${product.image}" alt="Image of ${product.title}">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p>Price: ${product.price} kr</p>
            <p>On Sale: ${product.discountedPrice} kr</p>
        `;
    productDiv.dataset.productId = product.id;
    container.appendChild(productDiv);
  });
}

function applyFilters() {
  const gender = document.getElementById("gender").value;
  const size = document.getElementById("size").value;
  const color = document.getElementById("color").value;
  const type = document.getElementById("type").value;

  console.log("Applying filters:");
  console.log("Gender:", gender);
  console.log("Size:", size);
  console.log("Color:", color);
  console.log("Type:", type);

  //  add logic to filter your products based on the selected values.
}

document.getElementById("loginBtn").addEventListener("click", function () {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("loginBtn").style.display = "none";
});

// LOGIN button

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "username" && password === "password") {
    localStorage.setItem("loggedIn", true);
    updateLoginState();
  } else {
    alert("Username or password is incorrect. Please try again.");
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  updateLoginState();
}

document.getElementById("logoutBtn").addEventListener("click", logout);

function updateLoginState() {
  if (localStorage.getItem("loggedIn")) {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("logoutBtn").style.display = "inline";
    document.getElementById("welcomeMsg").style.display = "block";
    document.getElementById("welcomeMsg").innerHTML = "PROFILE";
  } else {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("loginBtn").style.display = "inline";
    document.getElementById("logoutBtn").style.display = "none";
    document.getElementById("welcomeMsg").style.display = "none";
  }
}

window.onload = function () {
  updateLoginState();
};
