// Constructor function
function place(buttonText, element){
    this.buttonText = buttonText;
    this.element = element;
}

//Prototype method
Place.prototype.createButton = function(){
    const button = document.createElement("button");
    button.innerText = this.buttonText;
    button.style.margin = "20px";
    button.style.padding = "20px";
    
    //Toggle
    button.addEventListener("click", () =>{
        if(this.element.style.display === "none"){
            this.element.style.display = "block";
        } else{
            this.element.style.display = "none"
        }
    });

    //Insert button
    this.element.parentNode.insertBefore(button, this.element);

};
 
//select all destinations
const destinations = document.querySelectorAll(".destination");

//Create objects
const places = [
    new place("Eiffel Tower,Paris", destinations[0]);
    new place("Amazon River, Brazil", destinations[1]);
    new place("Maasai Mara, Kenya", destinations[2]);
];
//Create button
places.forEach(place =>{
    place.element.style.display = "none";
    place.createButton();
})
