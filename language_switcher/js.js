"use strict";


const texts = {
    de: {
        texts: [
            { text: "Das Bot", location: ".header" },
            { text: "Das Ro-Bot", location: ".footer" },
        ],
    },
    da: {
        texts: [
            { text: "Båden", location: ".header" },
            { text: "Robotten", location: ".footer" },
        ],
    },
};
// ---- Kunne ikke få den her til at virke som jeg skriv selv
// document.querySelector("#sprogskift").addEventListener("change", (event) => {
//   const lang = texts[event.target.value];
//   document.querySelector(".header").textContent = lang.header;
//   document.querySelector(".footer").textContent = lang.footer;
// }); 


// ----fik hjælp fra chatgpt til at lave noget af den her, det var den eneste måde det virkede på.
function updateText(locale) {
    texts[locale].texts.forEach(({ text, location }) => {
        document.querySelector(location).textContent = text;
    });
}

const sprogValgt = document.getElementById("sprogskift");
let locale = sprogValgt.value;
updateText(locale);


sprogValgt.addEventListener("change", (event) => {
    locale = event.target.value;
    updateText(locale);
});