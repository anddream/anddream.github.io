$(document).ready(function() {



$(window).scroll(function(){
  	var currentScroll = $(window).scrollTop(); 
  	//^this (scrollTop) caluclates how far you are from the top of the screen
  if (currentScroll >= 300) {
  		$("#nav").addClass("nav-bar-fixed");
  }
 else { $("#nav").removeClass("nav-bar-fixed");}  
  })
})