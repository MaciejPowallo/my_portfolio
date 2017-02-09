$(function(){
	$("#scroll-to-top").hide();

	$(window).scroll(function(){
		var stt_is_shown = false;
		var win_height = 600;
		var scroll_top = $(document).scrollTop(); 	
		
		if (scroll_top < win_height) {
			stt_is_shown = false;
			$("#scroll-to-top").fadeOut();}
			
		else if (scroll_top > win_height) {
			stt_is_shown = true;
			$("#scroll-to-top").fadeIn();}
   });


   $("#scroll-to-top").click(function(e){
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, 2000);
    });
 });


