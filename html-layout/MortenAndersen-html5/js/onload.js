(function ($) {
$(document).ready(function(){

/* Vis mobile menu */
	$('.mobile-menu').click(function(){
		$('nav.mobile').slideToggle('slow');
		$('div.wrap').fadeToggle('slow');
	});

});
}(jQuery));