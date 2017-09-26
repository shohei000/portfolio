$(function(){
	
  $('a[href^="#"]').on("click",function() {
    var speed = 800;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

  $('.main-title').fadeIn(1500);
	

});