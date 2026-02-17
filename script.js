// Constructor function
function Destination(name, location, season, memories, recommendation, img) {
    this.name = name;
    this.location = location;
    this.season = season;
    this.memories = memories; // array
    this.recommendation = recommendation;
    this.img = img;
}   

// Prototype method 
Destination.prototype.render = function() {
    return `
    <div class="destination fade-in">
        <h2>${this.name}</h2>
        <ul>
            <li><strong>Location:</strong>${this.location}</li>
            <li><strong>Season of year visited:</strong>${this.season}</li>
            <li><strong>Memories:</strong>
                <ul>
                    ${this.memories.map(memory => `<li>${memory}</li>`).join('')}   
                </ul>
            </li>
        </ul>
        <ul>
            <li><strong>Recommendation:</strong>${this.recommendation}</li>
        </ul>
        <img src="${this.img}" alt="" height="200px" width="100%">
    </div>
    `;
};

// Create objects
const eiffelTower = new Destination(
    "Eiffel Tower",
    "Paris, France",
    "Spring",
    ["The view from the top was breathtaking!", "I loved the light show at night."], 
    "Definitely a must-see when visiting Paris!",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2ZrOEt_Cumf7kIRU9Pjlnkm1479biPKg3tHXwAsMZnvlD3o9"
);

const amazonRainforest = new Destination(
    "Amazon Rainforest",
    "South America",    
    "Summer",
    ["The biodiversity was incredible!", "I enjoyed the boat tour along the river."], 
    "A unique experience for nature lovers!",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR1nl7Cg71gLQQ15Vh4C9EHQTGyJ73Klzl4w&s"
);

const maasaiMara = new Destination(
    "Maasai Mara",
    "Kenya, Africa",    
    "Fall",
    ["The wildlife was amazing!", "I loved the sunrise safari."],   
    "A fantastic destination for wildlife enthusiasts!",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkj8mn0Et6PXT3-wyz_KwUYZ6iCwEDP_sfow&s"
);  

// Click events
document.getElementById('europe').addEventListener('click', function() {
    document.getElementById('content').innerHTML = eiffelTower.render();
});

document.getElementById('southamerica').addEventListener('click', function() {
    document.getElementById('content').innerHTML = amazonRainforest.render();
});

document.getElementById('africa').addEventListener('click', function() {
    document.getElementById('content').innerHTML = maasaiMara.render();
});     