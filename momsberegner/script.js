document.getElementById("beregnBtn").addEventListener("click", beregn);


//har lavet den sammen med Sara Meisner

function beregnMoms(beloeb, moms = 2) {
  let total = beloeb + beloeb * (moms / 100);
  return total;
}

function beregn() {
  let beloeb = document.getElementById("beloeb").value;
  let moms = document.getElementById("moms").value;

  if (moms === "") {
    moms = 2;
  }

  let totalBeloeb = beregnMoms(parseFloat(beloeb), parseFloat(moms));
  document.getElementById("resultat").textContent = `Beløbet med ${moms}% moms lagt til er: ${totalBeloeb} kr.`;
}