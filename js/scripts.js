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

  // Here you can add the logic to filter your products based on the selected values.
}
