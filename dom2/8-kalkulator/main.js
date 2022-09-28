//implementirati digitron
//eval funkciju koristiti
let restart = true
let polje = document.getElementById("rezultat");

function unesi(unesi) {
if (restart == true) {
    polje.value = unesi;
    restart = false;
}
else {
    polje.value += unesi; }
}
function izracunaj() {
   let racun = polje.value;
    polje.value = eval(racun);
    //restart = true;
}
function obrisi() {
    polje.value = 0;
    //polje.value = ' ';
    restart = true;
}
