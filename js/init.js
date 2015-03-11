(function($){
	$(function(){

    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      console.log(scrollTop);
      if (scrollTop > 1) {
        $(".icon").addClass("fixed");
        $("ul.menu").addClass("fixed");
      }
      else {
        $(".icon").removeClass("fixed");
        $("ul.menu").removeClass("fixed");
      }
    });
    
	}); // end of document ready
})(jQuery); // end of jQuery name space

(function($){
	$(function(){
	  
    var animation_speed = 500;

    if ($('body').hasClass("slide-vertical")) {
      var tid = setInterval(tagline_vertical_slide, 2500);
    }
    else {
      var tid = setInterval(tagline_fade, 2500);
    }

    // fade style
    function tagline_fade() {
      var curr = $("h1.welcome span a.active");
      curr.removeClass("active");
      var nextTag = curr.next('a');
      if (!nextTag.length) {
        nextTag = $("h1.welcome span a").first();
      } 
      nextTag.addClass("active");
    }

    // vertical slide
    function tagline_vertical_slide() {
      var curr = $("h1.welcome span a.active");
      curr.removeClass("active").addClass("vs-out");
      setTimeout(function(){
        curr.removeClass("vs-out");
      }, animation_speed);

      var nextTag = curr.next('a');
      if (!nextTag.length) {
        nextTag = $("h1.welcome span a").first();
      } 
      nextTag.addClass("active");
    }

    function abortTimer() { // to be called when you want to stop the timer
      clearInterval(tid);
    }

    // Background adjustments
    if ($(window).height() > $(window).width()) {
      $("#home .background img").css({'width': 'auto', 'height': '100%'})
    }

	}); // end of document ready
})(jQuery); // end of jQuery name space
//function for 3d card viewer
(function($){
	$(function(){

    var activeWidth = $('.card-container').width();
    var activeImgWidth = $('.card-container .card a img').width();
    function balanceCards() {
      // Calc offset for active card
      var index = $('.card-container').index($('.active'));
      var offset = -1 * ((index * activeWidth) + (activeImgWidth / 2));

      $('.card-container.active').css({ "margin-left": offset + "px"});
    }

    balanceCards();

    $('.card a').click(function (e) {
      e.preventDefault();
      $(this).parents('.card-container').siblings().not('.' + $(this).attr("class")).removeClass("active").css({ "margin-left": "0px"});
      $(this).parents('.card-container').addClass("active");
      balanceCards();
    });
    
	}); // end of document ready
})(jQuery); // end of jQuery name space
