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