$(document).ready(function(){

	$(".mouseScroll").click(function(e) {

		var linkHref = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(linkHref).offset().top
		}, 1000);

		e.preventDefault();
	});


/*

   $('.fa-facebook').hover(function() {
		//does not find .fa-stack class for some reason
		var col = document.getElementsByClassName(".fa-stack");
		for(i=0; i<col.length; i++) {
    		col[i].style.color = 'black';
  		}
   });

*/



});
