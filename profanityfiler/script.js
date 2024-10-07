const curseWords = [
    {bad: "var", good: "const"},
    {bad: "float", good: "grid"},
    {bad: "marquee", good: "just don't"},

];

let theSentence = false;
let theText = document.querySelector("p").textContent

document.querySelector("button").addEventListener("click", replaceBadwords);


function replaceBadwords() {
    console.log ("replace")
    if (theSentence === false){
    curseWords.forEach(curseWords=>{
        theText=(theText.replaceAll(curseWords.bad,`<span>${curseWords.good}</span>`)); 
        // Vi pakker det ind i span fordi vi en har en css, funktion der hedder span og der er en regel .

    });
        console.log(theText)
        // Her skifter vi teksten ud med at skifte orderne ud.innerHTNL ændre alt, ikke kun tekst. 
        document.querySelector("p").innerHTML =theText
        theSentence = true;

}else {
    document.querySelector("dialog").showModal();
}
};
document.querySelector(".knap").addEventListener("click", closeModul())

function isItsafe() {
return false
}