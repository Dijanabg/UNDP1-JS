const paragraf = document.getElementById('tekst');
//console.log(paragraf);
const naslov = document.getElementById('naslov');
//const checkbox = document.getElementById('box');
const checkbox = document.querySelector('#box');
//console.log(checkbox);
console.log(checkbox.checked);

if(checkbox.checked) {
   paragraf.style.visibility  = 'visible';
    naslov.style.color = "red";
}
else{
    paragraf.style.visibility  = 'hidden';
    naslov.style.color = "green";
}

checkbox.addEventListener('change', function(){
    if(checkbox.checked) {
        paragraf.style.visibility  = 'visible';
        naslov.style.color = "red";
    }
     else{
         paragraf.style.visibility  = 'hidden';
         naslov.style.color = "green";
        }
});
