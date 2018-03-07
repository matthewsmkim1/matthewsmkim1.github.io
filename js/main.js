$(document).ready(function(){
	$('a[href^="#hi"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	var width = screen.width,
	var height = screen.height;

      if (screen.width <= 500 || screen.height <= 176) {

			$('#date').remove();
			$('#location').remove();

      }
});
