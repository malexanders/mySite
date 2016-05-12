$(document).on('ready turbolinks:load', function(){
	// alert("worked");
	$('.product-slider').slick({
		dots: true,
		arrows: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next')
	});
});
