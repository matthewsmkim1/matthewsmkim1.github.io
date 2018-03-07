$(document).ready(function(){
	$('a[href^="#aboutMeContainer"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 950, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	$('a[href^="#experience"]').on('click',function (e) {
		 e.preventDefault();

		 var target = this.hash;
		 var $target = $(target);

		 $('html, body').stop().animate({
			  'scrollTop': $target.offset().top
		 }, 1100, 'swing', function () {
			  window.location.hash = target;
		 });
	});
	$('a[href^="#social"]').on('click',function (e) {
		 e.preventDefault();

		 var target = this.hash;
		 var $target = $(target);

		 $('html, body').stop().animate({
			  'scrollTop': $target.offset().top
		 }, 1100, 'swing', function () {
			  window.location.hash = target;
		 });
	});
});
function navFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
