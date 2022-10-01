//PRVI PRIMER

// var broj1 = 5;
// var broj2 = 10;
// var zbir = broj1 + broj2;
// console.log(zbir);

//DRUGI PRIMER
//parseInt
// var a = parseInt (prompt("Unesi prvi sabirak:"));
// console.log(a);
// var b = parseInt (prompt("Unesi drugi sabirak"));
// console.log(b);
// var zbir = a + b;
// console.log(zbir);
//TRECI PRIMER

// let a = document.getElementById("broj1");
// console.log(a);

// let b =  document.getElementById("broj2");
// console.log(b);

// let dugme = document.getElementById('saberi');
// console.log(dugme);

// dugme.addEventListener("click", function(e){
// e.preventDefault();
//     document.getElementById("zbir").value = parseInt(a.value) + parseInt(b.value);
//     if(parseInt(document.getElementById("zbir")) > 20){
//         console.log("jasno");
//     }else{
//         console.log("nije");
//     }
// });


//let zbir = document.getElementById('zbir');

//function zbir(){
 //   zbir.value = a + b;
//}

$("#saberi").click(function(e) {
    e.preventDefault();
    var x = parseInt($("#broj1").val());
    var y = parseInt($("#broj2").val());
    $("#zbir").val(x+y);
});