//pronalazenje objekata
let div1 = document.getElementById('glavniDiv');
console.log(div1); //shortcut clg

let prom = document.getElementsByClassName('pasus');
console.log(prom);

let prom2 = document.getElementsByTagName('h2');
console.log(prom2);

let prom3 = document.querySelector('p');
//let prom3 = document.querySelectorAll('p.noviPasus');
console.log(prom3);

//prom3.innerHTML = 'Ovo je prvi <br> paragraf'; //kao u html-u

prom3.textContent = 'Ovo je prvi <br> paragraf';
prom3.style.color = 'rgb(150, 10, 20)';

let prom4 = prom3.nextElementSibling;
console.log(prom4);

let dugme = document.getElementById('menjaBoju');
dugme.addEventListener('click', pritisnutoDugme);

/*********
 * *******
 * ***funkcije
************
********/

function pritisnutoDugme() {
    //console.log('Dugme je pritisnuto');
    alert("Dugme je kliknuto");
    div1.style.background = "rgb(150, 0, 50)";
    console.log(div1.classList);
    div1.classList.add("zeleno");// dodavanje class i ako imamo u css podeseno to ce se izvrsavati tek na npr. click
}

let forma = document.forms['porudzbina'];
console.log(forma);
let imePrezime = forma['imePrezime']   ;
console.log(imePrezime);
let adresa = forma['adresa'];
console.log(adresa);

//Uneti ime i prezime korisnika u prompt box
let korisnik = prompt("Unesite ime i prezime:", "NN lice");
console.log(korisnik);
//Izmeniti jedan naslov tako da ispisuje ime korisnika
let prom6 = document.getElementsById('jedanNaslov');
prom6.textContent = ??????;