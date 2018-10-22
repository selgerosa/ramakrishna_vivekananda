(function($) {
  var endposition = $('.parent').height()-300;
  var startposition = $('header').height()+300;
    $(document).ready(function(){
        $(window).scroll(function(){
          if($(window).width() > 768){
            if ($(this).scrollTop() > endposition) {
              $('#nav2').fadeOut(500);
            }
            else if ($(this).scrollTop() > startposition) {
                $('#nav2').fadeIn(500);
            } else {
                $('#nav2').fadeOut(500);
            }
          }
        });
    });
})(jQuery);
