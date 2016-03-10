$(document).ready(function(){
    $('div').mouseenter(function(){
        $(this).animate({
           height: '+=50px'
       });
    });
    $('div').mouseleave(function(){
        $(this).animate({
           height: '-=50px'
       });
   }); 
});
