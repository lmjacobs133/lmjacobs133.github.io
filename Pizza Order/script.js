   /*


      Author: Leslie Jacobs
      Date:   10/22/17

      Filename: script.js
   */



"use strict";

var delivInfo = {};
var delivSummary = document.getElementById("deliverTo");

function processDeliveryInfo() {
    var prop;

    delivInfo.name = document.getElementById("nameinput").value;
    delivInfo.address = document.getElementById("addrinput").value;
    delivInfo.city = document.getElementById("cityinput").value;
    delivInfo.email = document.getElementById("emailinput").value;
    delivInfo.phone = document.getElementById("phoneinput").value;
    


    for (prop in delivInfo) {
        delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";            
    }

}

function previewOrder() {
    processDeliveryInfo();        
    document.getElementsByTagName("section")[0].style.display = "block";
    document.getElementById("deliverTo").style.display = "block";
}

/* Create event listeners */
function createEventListeners() {
    var previewBtn = document.getElementById("previewBtn")
    if (previewBtn.addEventListener) {
        previewBtn.addEventListener("click", previewOrder, false);
    } else if (previewBtn.attachEvent) {
        previewBtn.attachEvent("click", previewOrder);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}