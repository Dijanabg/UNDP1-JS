const paragraf = document.getElementById('tekst');
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
}
    else if(radioButtonBojiCrveno.checked){
    paragraf.style.color  = 'red';
}
    else{
     paragraf.style.color  = 'green';
}});