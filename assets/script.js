$(document).ready(function(){



$('#Layer_1').click(function(){
	if ($('.navbar').hasClass('activate-nav')) {
		$('.navbar').removeClass('activate-nav');
		$('.window').removeClass('scoot');
	} else {
		$(".navbar").addClass('activate-nav');
		$('.window').addClass('scoot');
		}

})

$("#crop img").click(function() {
 	$(".resume img").fadeIn(1000);
 	$("#overlay").fadeIn(1000);
});

$("#overlay").click(function() {
 	$(".resume img").fadeOut(1000);
 	$("#overlay").fadeOut(1000);
});


});