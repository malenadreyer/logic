"use strict";

const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];


let tbodyPointer;

document.addEventListener("DOMContentLoaded", function () {
tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);
});


function showTheseVehicles(arr) {
tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
      <td>${each.type || "Ukendt"}</td>
      <td>${each.fuel || "Ukendt"}</td>
      <td>${each.passengers >= 0 ? each.passengers : "Ukendt"}</td>
      <td>${each.stops ? each.stops.join(", ") : "Ingen stop"}</td>
      <td>${each.ownedBy || "Ukendt"}</td>
      <td>${each.isElectric ? "Ja" : "Nej"}</td>
      <td>${each.isTandem ? "Ja" : "Nej"}</td>
    </tr>`;
  });
}

function filterElectric() {
  console.log("Filtrerer el-drevne fartøjer");
  const filtered = vehicles.filter(v => v.isElectric);
  showTheseVehicles(filtered);
}

function filterSeats(){
  console.log("Filtrerer fartøjer med mere end 2 sæder");
  const filtered = vehicles.filter(v => v.passengers > 2);
  showTheseVehicles(filtered);
}

function filterElOwnByJonas() {
  console.log("Filtrerer el-drevne fartøjer ejet af Jonas");
  const filtered = vehicles.filter(v => v.isElectric && v.ownedBy === "Jonas");
  showTheseVehicles(filtered);
}

function filterRugbrod() {
  console.log("Filtrerer rugbrøds-drevne fartøjer med mere end én passager");
  const filtered = vehicles.filter(v => v.fuel === "Rugbrød" && v.passengers > 1);
  showTheseVehicles(filtered);
}
