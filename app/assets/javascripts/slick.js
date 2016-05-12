$(document).on('turbolinks:load', function(){
	// alert("worked");
	$('.product-slider').not('.slick-initialized').slick({
		dots: true,
		// arrows: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next')
	});

});

// MyGlobal.slickInit = function(){
// 	MyGlobal.slickAdded = true;
// 	$('.product-slider').slick({
// 		dots: true,
// 		arrows: true,
// 		prevArrow: $('.prev'),
// 		nextArrow: $('.next')
// 	});
// }
