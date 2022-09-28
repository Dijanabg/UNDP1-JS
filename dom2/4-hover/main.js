const paragraf1 = document.getElementById("tekst-1");
const paragraf2 = document.getElementById("tekst-2");

console.log(paragraf1);
console.log(paragraf2);

paragraf1.addEventListener("mouseover",function(){
    paragraf2.style.color ="green";
});

paragraf2.addEventListener("mouseover",function(){
    paragraf1.style.color ="blue";
});

paragraf1.addEventListener("mouseout",function(){
    paragraf2.style.color ="black";
});

paragraf2.addEventListener("mouseout",function(){
    paragraf1.style.color ="black";
});