"use strict";

let minTal = 0;
let maxTal = 100;
let computerGæt;

function startGame() {
    computerGæt = Math.floor((minTal + maxTal) / 2);
    visTal();
}
function visTal() {
    document.getElementById("feedback").textContent = `Computeren gætter: ${computerGæt}`;
}
function forLavt() {
    minTal = computerGæt + 1;
    computerGæt = Math.floor((minTal + maxTal) / 2);
    visTal();
}
function forHøjt() {
    maxTal = computerGæt - 1;
    computerGæt = Math.floor((minTal + maxTal) / 2);
    visTal();
}
function korrekt() {
    document.getElementById("feedback").textContent = `Tillykke! Computeren gættede rigtigt: ${computerGæt}`;
}