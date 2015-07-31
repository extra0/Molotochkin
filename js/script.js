$(function() {
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

	// яндекс карта 
	ymaps.ready(function() {
		var myMap = new ymaps.Map('map', {
				center: [55.751574, 37.573856],
				zoom: 13,
				controls: ['zoomControl']
			}, {
				searchControlProvider: 'yandex#search'
			}),
			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
				hintContent: 'Собственный значок метки'
			}, {
				// Опции.
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				// Своё изображение иконки метки.
				iconImageHref: 'img/marker.png',
				// Размеры метки.
				iconImageSize: [29, 33],
				// Смещение левого верхнего угла иконки относительно
				// её "ножки" (точки привязки).
				iconImageOffset: [-3, -33]
			});

		myMap.geoObjects.add(myPlacemark);
	});

});