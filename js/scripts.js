$(document).ready(function() {
	$('.js-fit-text').fitText();
	$(document).on('click', '.back-to-top', function(e) {
		e.preventDefault();
		$('.back-to-top').scrollTop();
	});
});