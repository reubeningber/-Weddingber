$(document).ready(function() {
	$('.js-fit-text').fitText();
	
	$(document).on('click', '.back-to-top', function(e) {
		e.preventDefault();

		var topNav = $('.site-nav').offset().top;

		$("html, body").animate({ scrollTop: topNav }, "slow");
	});
});