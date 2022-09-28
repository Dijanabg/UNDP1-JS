//SINTAKSA
//$(selector).akcija();

//SELEKTORI
//document.getElementsByClassName("paragraf").style.color = "green";

//$(".paragraf").css("color", "red");
//lt lower than
//gt greater than
$(".paragraf:eq(1)").css("color", "red");
$(".paragraf").eq(1).css("color", "red");
$(".paragraf").first().css("color", "red");

$(".paragraf:eq(1), .paragraf:eq(2)").css("color", "green");
$(".paragraf").slice(3, 6).css({color: "blue", "background-color": "rgb(20, 200, 10)"});

//EFEKTI
//$(".paragraf:eq(0)").hide();
//$(".paragraf:eq(1)").hide("slow");
//$(".paragraf:eq(2)").hide("fast");
//$(".paragraf:eq(3)").hide(5000);

//$(".paragraf:eq(1)").show(2000);

$(".dugme").click(function (){
    $(".paragraf:eq(1)").toggle(2000);
    //fadeIn
    //fadeOut
    fadeToggle
    $(".paragraf:eq(2)").fadeTo(2000, 0.5);
})
//slideUp
//slideDown

//$(".paragraf:eq(1)").toggle(2000);

//DOGADJAJI


//$(".dugme").click(function (){});

//document.getElementsByClassName("dugme")[0].addEventListener("click", function(){});

//$(".dugme").on("click", sta da uradi);

/*$(".polje").on("focus", function(){
    $(".polje:focus").css({border: "3px solid blue" })
});
$(".polje").on("blur", function(){
    $(this).css({border: "3px solid grey" })
});*/

//KOMBINUJE FOCUS I BLUR U JEDNOJ FUNKCIJI

/*$(".polje").on("focus blur", function(e){
    console.log(e);
    if(e.type == "focus"){
        $(this).css({border: "3px solid blue"}); 
    }else{
        $(this).css({border: "3px solid grey" });
    }
})*/
// GET METODE
//inerHTML, textContent
$(".paragraf").on("click", function(){
    let tekst = $(this).text();
    //let tekst = $(this).html();
    //let tekst = $(this).val(); da povucemo vrednost
    alert(tekst);
})

//SET METODE kada upisujemo vrednost u neko polje
let ime = "Petar Petrovic";
let adresa = "njegoseva 2"
$(document).ready(function(){
    $(".paragraf:eq(4)").text("Novi tekst ovog paragrafa");
    $(".polje:eq(0)").val(ime);
    $(".polje:eq(1)").val(adresa);
})
$(".dugme2").on("click", function(){
    let ime = $(".polje:eq(0)").val();
    let adresa = $(".polje:eq(1)").val();
    let napomena = $(".polje:eq(2)").val();
    console.log("Ime i prezime: " + ime + " " + "\nAdresa: " + adresa + " " + napomena)
})

//METODE ZA CLASS
//classList.add("") u vanila.js
//toogleClass kombinacija addClass i removeClass
$(".polje").on("focus blur", function(e){
    //console.log(e);
    if(e.type == "focus"){
        //$(this).css({border: "3px solid blue"}); 
        $(this).addClass("novoPolje");
    }else{
        //$(this).css({border: "3px solid grey" });
        $(this).removeClass("novoPolje");
    }
})
/*napraviti formu po izboru,
proveriti da li su polja forme prazna i 
ako su prazna obojiti polje u svetlo crveno a ako nisu obojiti ih u zeleno
koristiti event ili keypress ili neki slican
ograniciti max broj karaktera u polju*/