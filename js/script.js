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
				zoom: 10,
				controls: ['zoomControl']
			}, {
				searchControlProvider: 'yandex#search'
			}),
			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			});
		myMap.behaviors.disable('scrollZoom');

		myMap.geoObjects
			.add(new ymaps.Placemark([55.777697023347606, 37.70197299999995], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.6701370232536, 37.77420299999994], {
				balloonContent: 'Склад<br>Адрес: 109559, г. Москва,  Цимлянская ул., 3, стр.1<br>Телефон: +7 (985) 739-23-17'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.81326802337879, 37.48407599999996], {
				balloonContent: 'Склад<br>Адрес: 123182, Москва, 1-й Красногорский проезд, дом 3<br>Телефон: +7 (985) 739-23-17'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))

		myMap.geoObjects.add(myPlacemark);
	});

	// расчет калькулятора
	
		

});