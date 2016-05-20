$(document).on('turbolinks:load', function(){
    var element = document.getElementsByClassName("logo-image");
    var element_2 = document.getElementsByClassName("logo-text");
    var screen_width = $(window).width();
	var a_count = 0;

	MyGlobal.animate_count = 0;

    //$(element).addClass('logos-hide');

    // if (screen_width < 765){
    //     $(element).css({
    //         width: "40%"
    //     });
	// 	$(element_2).css({
    //         fontSize: "1em"
    //     });
    // }

    $(window).scroll(function() {
        if( $("#logo" && element).length > 0 ) {
            var elementTopToPageTop = $(element).offset().top;
            var windowTopToPageTop = $(window).scrollTop();
            var windowInnerHeight = window.innerHeight;
            var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
            var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
            var distanceFromBottomToAppear = 300;

            if(elementTopToWindowBottom > distanceFromBottomToAppear && screen_width > 765) {

				for(a_count; a_count < 1; a_count++){
	                $(element).animate({
	                    width: "40%"
	                }, 600, function() {
	                    $(element).finish();
	                });

	                $(element_2).animate({
	                    'font-size': "1.5em"
	                }, 600, function() {
	                    $(element_2).finish();
	                });
				}
				element.removeAttr('style');
            }
            else if(elementTopToWindowBottom < 0) {
                //$(element).removeClass('js-fade-element-show');
                //$(element).addClass('js-fade-element-hide');
            }



        }
    });




})
