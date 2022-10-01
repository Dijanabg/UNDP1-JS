let karakteri = "zxcvmbkkfjklgjkkldrjgkjklgg{1256789}";
console.log(karakteri.length);

//math.random

var a = Math.random();
console.log(a);
//Math.floor
var b = Math.floor();
console.log(b);

function generatePassword(leng){
    var password = "";
    for(var i =0; i < leng; i++){
        password += karakteri.charAt(Math.floor(Math.random()*47));
    }
    return password;
}
//var sifra = generatePassword();

var dugme = document.getElementById("generate");
console.log(dugme);

var brojKaraktera = document.getElementById("leng");

dugme.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("password").value = generatePassword(brojKaraktera.value);
})