const paragraf = document.getElementById('tekst');
const naslov = document.getElementById('naslov');
const radioButtonBojiPlavo = document.getElementById('rb-plavo');
const radioButtonBojiCrveno = document.getElementById('rb-crveno');

console.log(radioButtonBojiPlavo);
console.log(radioButtonBojiCrveno);


/*if(radioButtonBojiPlavo.checked) {
    paragraf.style.color  = 'blue';
 }
else if(radioButtonBojiCrveno.checked ){
    paragraf.style.color  = 'red';
 }
else{
    paragraf.style.color  = 'green';
 };*/

document.addEventListener('click', function(){
    if(radioButtonBojiPlavo.checked) {
    paragraf.style.color  = 'blue';
    naslov.style.color = 'red';
}
    else if(radioButtonBojiCrveno.checked){
    paragraf.style.color  = 'red';
    naslov.style.color = 'green';
}
    else{
     paragraf.style.color  = 'green';
     naslov.style.color = 'blue';
}});