$(document).ready(function() {
	$('.js-fit-text').fitText();

	$('body').fitVids();
	
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	 $('#clock').countdown('2015/10/11').on('update.countdown', function(event) {
		var $this = $(this).html(event.strftime(''
	    + '<span class="digits">%-D</span> Day%!d '
	    + '<span class="digits">%H</span> Hours '
	    + '<span class="digits">%M</span> Minutes '
	    + '<span class="digits">%S</span> Seconds'));
	 });

	 
});