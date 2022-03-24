// Navbar Toggle
document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
});

// Modal Video
// Replace data-video-id with your youtube id video
$("#exartech_modal_playbtn").modalVideo();

// Back to Top
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.ext_backtotop').fadeIn(600);
    } else {
      $('.ext_backtotop').fadeOut(600);
    }
  });

  $('.ext_backtotop').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 600);
  })
});

// Smooth Scroll
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1000);
});

// Preloader
$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').delay(1500).fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(1500).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(1500).css({'overflow':'visible'});
})

// Lazy load Image
$(function() {
  $('.lazy').lazy();
});