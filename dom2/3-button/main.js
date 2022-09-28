const paragraf = document.getElementById("tekst");
const plavo = document.getElementById("rb-plavo");
const crveno = document.getElementById("rb-crveno");

const dugme = document.getElementById("dugme");

dugme.addEventListener("click", function(){
    if(plavo.checked){
        paragraf.style.color = "blue";
        paragraf.style.fontSize = "xx-large";
    } else if (crveno.checked){
        paragraf.style.color = "red";
        paragraf.style.fontSize = "xx-small";
    }else{
        paragraf.style.color = "green";
    }
});