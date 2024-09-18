"use strict";

let tilfældigtTal = Math.floor(Math.random() * 101);
 
function gætTal() {
  let brugerGæt = parseInt(document.getElementById("guess").value);
  let feedback = document.getElementById("feedback");
 
    
  if (brugerGæt > tilfældigtTal) {
    feedback.textContent = "For højt! Prøv igen.";
  } else if (brugerGæt < tilfældigtTal) {
    feedback.textContent = "For lavt! Prøv igen.";
  } else {
    feedback.textContent = "Tillykke! Du gættede rigtigt!";
    feedback.classList.add("fade-in");
  }
}
 
 

// function tjekGet(){
// console.log("Math.random", Math.floor(Math.random()* 100))
// document.querySelector("#ettal").textContent = Math.floor(Math.random()*100);
// }


