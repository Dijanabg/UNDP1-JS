$(document).ready(function(){
    $(".guess_box").click(function(){
        //alert("odlicna si!!!");
        $(".guess_box p").remove();
    var discount = Math.floor((Math.random()*5)+5);
    var discountMsg = "<p>Your discount is "+ discount +"%</p>";
    //alert(discount);
    $(this).append(discountMsg);
    });
});