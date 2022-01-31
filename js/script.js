/**
 * This is script for index page
 */

(function ($) {
  $(document).ready(function () {
    $('.testimonials .slider-holder').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows: true,
      dots: false,
      centerMode: true,
      variableWidth: true,
    });
    $(window).scroll(function(){
      var header_trigger = $('.banner').outerHeight();
      if ($(this).scrollTop() > header_trigger) {
        $('.header').addClass('scrolled');
      } else {
        $('.header').removeClass('scrolled');
      }
    });
    $('.modal-trigger').on('click', function(e) {
      e.preventDefault();
      $('.modal').fadeIn();
      $('.modal-overlay').fadeIn();
    })
    $('.modal-overlay').on('click', function() {
      $('.modal').fadeOut();
      $('.modal-overlay').fadeOut();
    })
  });
})(jQuery);
