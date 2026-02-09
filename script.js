// Constructor function
function Place(buttonText, element) {
    this.buttonText = buttonText;
    this.element = element;
}

// Prototype method to create button
Place.prototype.createButton = function () {
    const button = document.createElement("button");
    button.innerText = this.buttonText;
    button.style.margin = "10px 0";
    button.style.padding = "10px";
    button.style.cursor = "pointer";

    // Toggle visibility on click
    button.addEventListener("click", () => {
        if (this.element.style.display === "none") {
            this.element.style.display = "block";
        } else {
            this.element.style.display = "none";
        }
    });

    // Insert button before destination
    this.element.parentNode.insertBefore(button, this.element);
};

// Select all destinations
const destinations = document.querySelectorAll(".destination");

// Create Place objects
const places = [
    new Place("Eiffel Tower, Paris", destinations[0]),
    new Place("Amazon River, Brazil", destinations[1]),
    new Place("Maasai Mara, Kenya", destinations[2])
];

// Hide destinations initially & create buttons
places.forEach(place => {
    place.element.style.display = "none";
    place.createButton();
});
