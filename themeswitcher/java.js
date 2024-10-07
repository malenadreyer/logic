document.addEventListener("DOMContentLoaded", init)
function init (){
    document.querySelector("select").addEventListener("change", changeTheme)
}

function changeTheme (evt){

    const selcetedTheme = evt.target.value;
    console.log("change", evt.target.value)
    document.querySelector("header").dataset.filter = selcetedTheme;
    document.querySelector("body").dataset.filter = selcetedTheme;
    document.querySelector("footer").dataset.filter = selcetedTheme;

}