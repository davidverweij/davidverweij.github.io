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
    duration : 900,
		scale    : 1
	});

	sr.reveal('.project li', 250);
}(jQuery));
