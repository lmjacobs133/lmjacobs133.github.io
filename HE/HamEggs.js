/*
Leslie Jacobs
12/30/19
*/

"use strict";

// loop from 1 to 200

for (var i = 1; i < 201; i++) {

  if (i % 3 === 0 && i % 5 === 0) {
      console.log("Ham & Eggs");
  }

  else if (i % 3 === 0) {
      console.log("Ham");
  }

  else if (i % 5 === 0) {
      console.log("Eggs");
  }

  else {
      console.log(i);
  }
}