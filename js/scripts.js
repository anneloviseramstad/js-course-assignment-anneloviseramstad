document.querySelectorAll("#sizeOptions a").forEach((item) => {
  item.addEventListener("click", function (event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the data-size attribute from the clicked link
    var size = this.getAttribute("data-size");

    // Update the button's text to show the selected size
    document.getElementById("sizeButton").textContent = size;
  });
});

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
