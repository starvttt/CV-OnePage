		$(document).ready(function() {
  $('a[href^="#"]').click(function() {
      var hash = $(this).attr('href');
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900);
        return false;
    });
});