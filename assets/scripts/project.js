(function($) {

  /*
  $(function() {
  	$(window).on('load resize', function() {
  		sticky();
  	});

  	function sticky() {
  		var w = $(window).width();

  		if (w < 750) {
  			$('.project article').trigger('sticky_kit:detach');
  		} else {
  			$('.project article').stick_in_parent({
  				offset_top: $('.header').outerHeight()
  			});
  		}
  	}
  });
  */

  var sr = ScrollReveal({
    origin: "left",
    duration: 900,
    scale: 1
  });

  sr.reveal('.project .article_image', 250);


}(jQuery));

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
