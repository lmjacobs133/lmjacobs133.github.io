   /*
      Author: Leslie Jacobs
      Date:   12/29/19

      Filename: script.js
   */

  "use strict";
 
  let delivInfo = {};
  let foodInfo = {};
  let delivSummary = document.getElementById("deliverTo");
  let foodSummary = document.getElementById("order");
   
  function previewOrder()
  {
      processDeliveryInfo();
      processFood();
      document.getElementsByTagName("section")[0].style.display = "block";
  }
  
  function processDeliveryInfo()
  {
      let prop;
      delivInfo.name = document.getElementById("nameinput").value;
      delivInfo.addr = document.getElementById("addrinput").value;
      delivInfo.city = document.getElementById("cityinput").value;
      delivInfo.email = document.getElementById("emailinput").value;
      delivInfo.phone = document.getElementById("phoneinput").value;

      for (prop in delivInfo)
        {
            delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
        }

      document.getElementById("deliverTo").style.display = "block";
  }
  
  function processFood()
  {
      let prop;
      let crustOpt = document.getElementsByName("crust");
      let toppings = 0; 
      let toppingBoxes = document.getElementsByName("toppings");
      let instr = document.getElementById("instructions");

      if (crustOpt[0].checked)
        {
            foodInfo.crust = crustOpt[0].value;
        }
      else 
        {
            foodInfo.crust = crustOpt[1].value;
        }

      foodInfo.size = document.getElementById("size").value; 

      for (let i = 0; i < toppingBoxes.length; i++) 
        {
            if (toppingBoxes[i].checked)
                {
                    toppings++;
                    foodInfo["topping" + toppings] = toppingBoxes[i].value; 
                }
        }
        
      if (instr.value != "")
        {
            foodInfo.instructions = instr.value;
        }
      else 
        {
            foodInfo.instructions = instr.value = "No special instructions";
        }

      foodSummary.innerHTML += "<p><span>Crust</span>: " + foodInfo.crust + "</p>";
      foodSummary.innerHTML += "<p><span>Size</span>: " + foodInfo.size + "</p>";
      foodSummary.innerHTML += "<p><span>Topping(s)</span>: " + "</p>";
      foodSummary.innerHTML += "<ul>";

      for (let i = 1; i < 6; i++)
        {
            if (foodInfo["topping" + i])
                {
                    foodSummary.innerHTML += "<li>" + foodInfo["topping" + i] + "</li>";
                }
        }
        
      foodSummary.innerHTML += "</ul>";
      foodSummary.innerHTML += "<p><span>Instructions</span>: " + foodInfo.instructions;
      document.getElementById("order").style.display = "block"; 
  }
  
  /* create event listener */
    function createEventListener()
    {
        let previewBtn = document.getElementById("previewBtn");

        if (previewBtn.addEventListener)
            {
                previewBtn.addEventListener("click", previewOrder, false);
            }
        else if (previewBtn.attachEvent)
            {
                previewBtn.attachEvent("onclick", previewOrder);
            }
    }

  
  /* create event listener when page finishes loading */
    if (window.addEventListener)
        {
            window.addEventListener("load", createEventListener, false);
        }
    else if (window.attachEvent)
        {
            window.attachEvent("onload", createEventListener);
        }