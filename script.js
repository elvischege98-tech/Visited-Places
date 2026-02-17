// ==========================
// Business Logic
// ==========================

// Constructor
function Place(location, landmarks, time, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}

// Prototype method to return formatted summary
Place.prototype.getSummary = function () {
  return this.location + " - Visited in " + this.time;
};


// ==========================
// Application Logic
// ==========================

// Create objects using the constructor (NOT literal notation)

var paris = new Place(
  "Eiffel Tower, Paris",
  ["Seine River cruise", "Arc de Triomphe", "French cuisine"],
  "Winter",
  "Amazing architecture and beautiful night lights."
);

var amazon = new Place(
  "Amazon River, Brazil",
  ["Saw wildlife", "Boat ride", "Rainforest tour"],
  "Summer",
  "Hot, humid, and full of adventure."
);

var kenya = new Place(
  "Maasai Mara, Kenya",
  ["Safari tour", "Buffalo migration", "Cultural visit"],
  "Summer",
  "Incredible wildlife and unforgettable scenery."
);


// ==========================
// Display Logic
// ==========================

var places = [paris, amazon, kenya];

function displayPlaces() {
  var container = document.querySelector(".button-container");
  container.innerHTML = "";

  places.forEach(function (place) {
    var div = document.createElement("div");
    div.className = "destination";

    div.innerHTML = `
      <h2>${place.location}</h2>
      <ul>
        <li><strong>Landmarks:</strong> ${place.landmarks.join(", ")}</li>
        <li><strong>Time Visited:</strong> ${place.time}</li>
        <li><strong>Notes:</strong> ${place.notes}</li>
      </ul>
    `;

    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", displayPlaces);
