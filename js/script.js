$(function() {

	// ф-я разбивки на разряды
	function numberWithCommas(x) {
		return x.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g, "\$1 ");
	}

	//только цифры и точка в odds
	$('.cost__input').bind("change keyup input click", function() {
		if (this.value.match(/[^0-9\.]/g, '')) {
			this.value = this.value.replace(/[^0-9]/g, '');
		}
	});

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

	// маска на телефон
	$('.mask').mask('+7 (999) 999-99-99');

	// расчет калькулятора
	var input = $('.cost__input'),
		total = $('.cost__price'),
		select = $('.cost__select'),
		summ = 0;

	function calc() {
		input.each(function(){
			summ += $(this).val() * $(this).attr('data-val');
		});
		total.html(summ);
		total.html(numberWithCommas(total.html()));
	}

	input.keyup('change', function(){
		summ = 0;
		select.each(function(){
			summ += parseInt($(this).val());
		});
		calc();
	});

	select.change(function(){
		summ = 0;
		summ += parseInt($(this).val());
		calc();
	});
	

	// меняем карту и форму местами в контактах
	$('.change').click(function(){
		if ($('.local-form__local-section').is(':visible')) {
			$('.freecall__change').html('Пишите, не стесняйтесь');
		} else {
			$('.freecall__change').html('Тут Вы узнаете где находится Молоточкин');
		}
		
		$('.local-form__local-section').slideToggle(500);
		$('.local-form__form-section').slideToggle(500);
	});

	// вызов слайдера в отзывах
	$('.slick_slider').slick({
	  centerMode: true,
	  centerPadding: '0px',
	  speed: 500,
	  slidesToShow: 3
	});

	// яндекс карта 
	ymaps.ready(function() {
		var myMap = new ymaps.Map('map', {
				center: [55.751574, 37.573856],
				zoom: 9,
				controls: []
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
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.6701370232536, 37.57420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([54.6701370232536, 37.77420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.6701370232536, 37.77440299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.6501370232536, 37.77420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.6401370232536, 37.77420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.81326802337879, 37.48407599999996], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.6701370232536, 37.77440299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.1501370232536, 37.77420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.5501370232536, 37.77420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.51326802337879, 37.48407599999996], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))



			.add(new ymaps.Placemark([54.777697023347606, 37.70197299999995], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([54.5701370232536, 37.77420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.6701370232536, 36.57420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([54.6701370232536, 36.23420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([54.6701370232536, 34.77440299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.0501370232536, 37.17420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.4401370232536, 37.47420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.86326802337879, 37.68407599999996], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.6301370232536, 37.87440299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.6601370232536, 37.17420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.2201370232536, 37.17420299999994], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))
			.add(new ymaps.Placemark([55.71326802337879, 37.45407599999996], {
				hintContent: 'Собственный значок метки'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/marker.png',
				iconImageSize: [29, 33],
				iconImageOffset: [-3, -33]
			}))

		myMap.geoObjects.add(myPlacemark);
	});

	// стилизируем файл инпут
	$('.file').styler();

	// вызов табов
	$('.tabs').tabs({
		active: 2,
		show: {
			effect: "fade",
			duration: 800
		}
	});

	var width = $(window).width(); 
    if (width < 767) {
        $('.slick_slider').slick('unslick');
    }


});