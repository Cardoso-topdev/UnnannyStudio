/**
 * This is script for index page
 */

(function ($) {
  $(document).ready(function () {
    $('video, img').bind('contextmenu',function() { return false; });
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
    $('.video-buttons .btn-theme').on('click', function () {
      if ( !$(this).hasClass('active') ) {
        $('.video-player .btn-theme.active').removeClass('active');
        var themeAnchor = $(this).attr('theme-anchor');
        var killAnchor = $('.video-buttons .btn-wrap.active .btn-kill').attr('kill-anchor');
        $('.video-player video.active').fadeOut(300, function() {
          $('.video-player video[theme-anchor="' + themeAnchor + '"][kill-anchor="' + killAnchor + '"]').fadeIn().addClass('active');
        });
        $(this).addClass('active');
      }
    });
    $('.video-buttons .btn-kill').on('click', function () {
      if ( !$(this).parent().hasClass('active') ) {
        $('.video-player .btn-wrap.active').removeClass('active');
        var killAnchor = $(this).attr('kill-anchor');
        var themeAnchor = $('.video-buttons .btn-theme.active').attr('theme-anchor');
        $('.video-player video.active').fadeOut(300, function() {
          $('.video-player video[theme-anchor="' + themeAnchor + '"][kill-anchor="' + killAnchor + '"]').fadeIn().addClass('active');
        });
        $(this).parent().addClass('active');
      }
    });
  });
})(jQuery);
