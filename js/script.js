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
  });
})(jQuery);
