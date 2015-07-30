$(function(){
	// вызов слайдера
	$('.slider__list').bxSlider({
		pager: false,
		moveSlides: 1,
		minSlides: 6,
		maxSlides: 6,
		slideWidth: 177,
		slideMargin: 30
	});

	// модальные окна
	$('.fancy').fancybox();

});