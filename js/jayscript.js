(function($) {
  "use strict"; // Start of use strict





  function blink_text() {
      // $('.blink').css('display', 'none');
      $('#blink').fadeOut(250);
      $('#blink').fadeIn(250);
  }
  setInterval(blink_text, 800);


    var i = 0;
    var i2 = 0;
    var i3 = 0;
    var txt = 'A Jay Lliguichushca';
    var txt2 = 'Creation';
    var txt3 = '▉'
    var speed = 120;

    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("txt1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    function typeWriter2() {
      if (i2 < txt2.length) {
        document.getElementById("txt2").innerHTML += txt2.charAt(i2);
        i2++;
        setTimeout(typeWriter2, speed);
      }
    }

    function typeWriter3() {
      if (i3 < txt3.length) {
        document.getElementById("blink").innerHTML += txt3.charAt(i3);
        i3++;
        setTimeout(typeWriter3, speed);
      }
    }




  $(document).ready(function(){
  /*! Fades in page on load */
  $('body').css('display', 'none');
  $('body').fadeIn(1000);
  setTimeout(function() { typeWriter() },500)
  setTimeout(function() { typeWriter2() },2800)
  setTimeout(function() { typeWriter3() },3800)


  });



  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  $('.flip-container .flipper').click(function() {
	$(this).closest('.flip-container').toggleClass('hover');
    $(this).css('transform, rotateY(180deg)');
  });







})(jQuery); // End of use strict
