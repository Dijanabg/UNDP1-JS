$(".polje").on("click", function(){
    // let polje = $(".polje").val();
    if ($(this == 0)){
        $(this).css({"background-color": "lightblue"});
}
})


$(".polje").keypress(function(){
    //console.log( "Handler for .keypress() called." );
    let polje = $(".polje").val();
    if (polje == " "){
        $(this).css({"background-color": "lightblue"});
    }else{
        $(this).css({"background-color": "lightgreen"});
    }55
})


$(".polje").keyup(function() {
    let max = 5;
    if ($(this).val().length > max) {
        $(this).val($(this).val().substr(0, max));
        
        //Take action, alert or whatever suits
        alert("This field can take a maximum of 5 characters");
    }
});
  
//NEMOGUCA MISIJA!!!!!!!!!!!!!!!!!!!!!!!!
// function polje(e){
//     //console.log( "Handler for .event() called." );
//     //let polje = $(".polje")
//     if ( "e.polje.length" >= 3 ) {
//         console.log( "Handler for .event() called." );
//         //alert("dosta")
//      }
    
// }
// function validateForm() {
//     let ime = document.getElementById('ime').lenght;
//     let password = document.getElementById('password').lenght;
//         if ((ime >= 3) || (password >=5)) {
//             alert("Zaista mi je dosta!!!");
//             return false;
//         }
//     }
//  validateForm();