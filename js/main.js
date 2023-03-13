// js =========================================================
$('html').removeClass('no-js');
$('html').addClass('js');

// preload ======================================================
window.onload = function(){
 setTimeout(function(){
   $("#overlayer").fadeOut("slow");
   $("body").addClass("loaded");
 }, 400);
};

// nav ==========================================================
$('.burger').on('click', function() {
    $('.burger').toggleClass('active');
    $('nav').toggleClass('active');
});


$('.request').on('click', function() {
    $('.contact').toggleClass('active');
});

$('.close').on('click', function() {
    $('.contact').toggleClass('active');
    $('nav').removeClass('active');
    $('.burger').removeClass('active');
});

// smooth scroll ================================================
$('a[href*="#"]:not([href="#"])').click(function() {
    var offset = -80;
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top + offset
            }, 1000);
            return false;
        }
    }
});

// owl ==========================================================
$(function(){
	$('.owl-carousel').owlCarousel({
	    loop: true,
	    margin: 10,
	    nav: false,
	    autoplay: true,
        animateOut: 'fadeOut',
	    autoplayTimeout: 5000,
      	smartSpeed: 1000,
	    responsive:{
	        0:{
	            items: 1
	        }
	    }
	})
});

// animate on scroll ============================================
(function ($) {
  'use strict';
  $.fn.inviewport = function (options) {
    var settings = $.extend({
      'minPercentageInView' : 100,
      'standardClassName': 'in-view'
    }, options);
    this.each(function () {
      var $this = $(this),
        $win = $(window),
        changed = false,
        isVisible = function () {
          var c = settings.className || settings.standardClassName,
            min = (settings.threshold || settings.minPercentageInView) / 100,
            xMin = $this.width() * min,
            yMin = $this.height() * min,
            winPosX = $win.scrollLeft() + $win.width(),
            winPosY = $win.scrollTop() + $win.height(),
            elPosX = $this.offset().left + xMin,
            elPosY = $this.offset().top + yMin;
          if (winPosX > elPosX && winPosY > elPosY) {
            $this.addClass(c);
          }
        };
      $win.on('ready', isVisible())
        .on('resize scroll', function () {
          changed = true;
        })
      setInterval(function () {
        if (changed) {
          changed = false;
          isVisible();
        }
      }, 250);
    });
  };
}(jQuery));

$(function () {
  $('.animate').inviewport({
    threshold: 0.1,
    className: 'on-screen'
  })
});