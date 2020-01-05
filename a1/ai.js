/*
    Author: Leslie Jacobs
    Date:  10.06.17

*/



// Event Listener to clear all input on page load
window.addEventListener("load", function (){
    document.getElementById("home").innerHTML = "";
    document.getElementById("city").innerHTML = "";
    document.getElementById("userInput").value = "";
})


// Function where user will guess the cities I've lived in
function guessCity() {
let state;
let cities = document.getElementById("userInput").value;
    
// Array of cities where I have lived when State is input
let citiesarray1 = ["Cheektowaga, Rochester, and Kenmore", "Crofton", "Tampa and Wesley Chapel", "That is not a State I have lived in.  Try either NY, MD, or FL!"]

    // Switch statement based on user input
    switch(cities) {
        case "NY":
            text = citiesarray1[0];
            break;
        case "MD":
            text = citiesarray1[1];
            break;
        case "FL":
            text = citiesarray1[2];
            break;
        default:
            text = citiesarray1[3];
    }
    document.getElementById("home").innerHTML = text;
}

function yearsCity(index) {    
    // Array of cities where I have lived when yearsCity buttons are selected
    let citiesarray2 = ["Cheektowaga, NY", "Rochester, NY", "Kenmore, NY", "Crofton, MD", "Tampa, FL", "Wesley Chapel, FL"]
    document.getElementById("city").innerHTML = citiesarray2[index];
    
}

function bfloPopup() {
	let win = window.open("", "Title", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=600, height=350");
	win.document.body.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/sBsi5FGbY2Y?rel=0" frameborder="0" allowfullscreen></iframe>';
}