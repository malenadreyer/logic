"use strict";

window.addEventListener("DOMContentLoaded", start);

const Animal = {
    name: "-defaut name-",
    desc: "-no description-",
    type:"-unknown-",
    age: "-zero-"

}

const allAnimals = [];

function start( ) {
    console.log("ready");

    loadJSON();
}


function loadJSON() {
    fetch("animals.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        prepareObjects( jsonData );
    });
}

function prepareObjects( jsonData ) {
    jsonData.forEach( jsonObject => {
// Create new object with cleaned data - and store that in the allAnimals array
        const animal = Object.create(Animal);

        // her finder vi det korekte data og laver en ny data liste fra det
        const fullname = jsonObject.fullname;
        const firstSpace = fullname.indexOf(" ");
        const secondSpace = fullname.indexOf(" ", firstSpace + 1);
        const lastSpace = fullname.lastIndexOf(" ");

        const name = fullname.substring(0, firstSpace);
        const desc = fullname.substring(secondSpace+1,lastSpace);
        const type = fullname.substring(lastSpace+1);

        // console.log (`name:_${name}_desc:_${desc}_type:_${type}_`) for hjælp til at se hvordan de ville se ud.
// her smider vi det nye data ind i html filen 
        animal.name = name;
        animal.desc = desc;
        animal.type = type;

        animal.age = jsonObject.age;
//  her pusher vi vores liste ind. 
        allAnimals.push(animal);
    });

    displayList();
}

function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    allAnimals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}


