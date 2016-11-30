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


$("#ill").click(function() {
	$("#illus").fadeIn(900);
	$("#Photoshop").fadeOut(900);
	$("#Instagram").fadeOut(900);
});

$("#photo").click(function() {
	$("#Photoshop").fadeIn(900);
	$("#illus").fadeOut(900);
	$("#Instagram").fadeOut(900);
});

$("#insta").click(function() {
	$("#Instagram").fadeIn(900);
	$("#Photoshop").fadeOut(900);
	$("#illus").fadeOut(900);
});


//-- Javascript plug-ins-----////

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



});