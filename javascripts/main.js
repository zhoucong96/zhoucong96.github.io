$(document).ready(function(){
    $('header').mouseenter(function(){
        $(this).animate({
           height: '+=10px'
       });
    });
    $('header').mouseleave(function(){
        $(this).animate({
           height: '-=10px'
       });
    })
    $('div').click(function() {
       $(this).hide();
   }); 
});
