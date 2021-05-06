// Modal Control - Book

$(function() {

	var modal = $('#book.modal-mask');

	$('.recipe-btn').on('click', function(event) {
		event.preventDefault();
		modal.removeClass('hide');
	});

	$('.modal-close').on('click', function() {
		modal.addClass('hide');
	});

	$(document).on('click', function(event) {
		if ( event.target.id == 'mW1' ) {
			modal.addClass('hide');
		}
	});

});

// Modal Control - Catalog

$(function() {

	var modal = $('#catalog.modal-mask');

	$('.buy-btn').on('click', function(event) {
		event.preventDefault();
		modal.removeClass('hide');
	});

	$('.modal-close').on('click', function() {
		modal.addClass('hide');
	});

	$(document).on('click', function(event) {
		if ( event.target.id == 'mW2' ) {
			modal.addClass('hide');
		}
	});

});

// Modal Control - Catalog

$(function() {

	var modal = $('#bonus.modal-mask');

	$('.bonus-btn').on('click', function(event) {
		event.preventDefault();
		modal.removeClass('hide');
	});

	$('.modal-close').on('click', function() {
		modal.addClass('hide');
	});

	$(document).on('click', function(event) {
		if ( event.target.id == 'mW6' ) {
			modal.addClass('hide');
		}
	});

});

// Modal Control - Header

$(function() {

	var modal = $('#header-modal.modal-mask');

	$('#menu .btnHead').on('click', function(e) {
		e.preventDefault();
		modal.removeClass('hide');
	});

	$('.modal-close').on('click', function() {
		modal.addClass('hide');
	});

	$(document).on('click', function(event) {
		if ( event.target.id == 'mW3' ) {
			modal.addClass('hide');
		}
	});

});

// Modal Control - Black friday

$(function() { // fridayblack

	var modal = $('#blackfriday-modal.modal-mask');

	$('.bf-text-block .bf-btn').on('click', function(e) {
		e.preventDefault();
		modal.removeClass('hide');
	});

	$('.modal-close').on('click', function() {
		modal.addClass('hide');
	});

	$(document).on('click', function(event) {
		if ( event.target.id == 'mW3' ) {
			modal.addClass('hide');
		}
	});

});

// Modal Control - About

$(function() {

	var modal = $('#about-modal.modal-mask');

	$('#aboutBtn').on('click', function(e) {
		e.preventDefault();
		modal.removeClass('hide');
	});

	$('.modal-close').on('click', function() {
		modal.addClass('hide');
	});

	$(document).on('click', function(event) {
		if ( event.target.id == 'mW4' ) {
			modal.addClass('hide');
		}
	});

});

// Modal Control - Additionally

$(function() {

	var modal = $('#additionally-modal.modal-mask'),
	addPrice = $('#additionally-modal #modal-value-add'),
	addTextm = $('#additionally-modal #modal-text-add')
	hiddenComAdd = $('#additionally-modal [name="DATA[COMMENTS]"]');
		// console.log(hiddenComAdd);

		$('#carga, #komplOhl, #areom, #rashiga, #popugai, #dioptr, #ugol, #regMosh, #ten').on('click', function(e) {
			e.preventDefault();
		// $(this).addClass('active');
		modal.removeClass('hide');

		if ( $(this).attr('id') == 'carga' ) {
			addPrice.text('850₴');
			addTextm.text('Отвод под вытяжку');
			hiddenComAdd.val('Отвод под вытяжку');
			// console.log('carga');
		} else if ( $(this).attr('id') == 'dioptr' ) {
			addPrice.text('2 300₴');
			addTextm.text('Инновационный диоптр 4 в 1');
			hiddenComAdd.val('Инновационный диоптр 4 в 1');
			// console.log('dioptr');
		} else if ( $(this).attr('id') == 'popugai' ) {
			addPrice.text('900₴');
			addTextm.text('Непрерывный контроль крепости (Попугай)');
			hiddenComAdd.val('Непрерывный контроль крепости (Попугай)');
			// console.log('popugai');
		} else if ( $(this).attr('id') == 'rashiga' ) {
			addPrice.text('850₴');
			addTextm.text('Кольца Рашига 1 кг');
			hiddenComAdd.val('Кольца Рашига 1 кг');
			// console.log('rashiga');
		} else if ( $(this).attr('id') == 'areom' ) {
			addPrice.text('550₴');
			addTextm.text('Набор профессиональных ареометров и мерная колба');
			hiddenComAdd.val('Набор профессиональных ареометров и мерная колба');
			// console.log('areom');
		} else if ( $(this).attr('id') == 'komplOhl' ) {
			addPrice.text('1150₴');
			addTextm.text('СПН');
			hiddenComAdd.val('СПН');
			// console.log('drogi');
		} else if ( $(this).attr('id') == 'ugol' ) {
			addPrice.text('850₴');
			addTextm.text('Угольная колонна AquaGradus');
			hiddenComAdd.val('Угольная колонна AquaGradus');
			// console.log('drogi');
		} else if ( $(this).attr('id') == 'regMosh' ) {
			addPrice.text('1 850₴');
			addTextm.text('Регулятор мощности нагрева АГ-2');
			hiddenComAdd.val('Регулятор мощности нагрева АГ-2');
			// console.log('drogi');
		} else if ( $(this).attr('id') == 'ten' ) {
			addPrice.text('350₴');
			addTextm.text('Водяной ТЭН для самогонного аппарат');
			hiddenComAdd.val('Водяной ТЭН для самогонного аппарат');
			// console.log('drogi');
		};
	});

		$('.modal-close').on('click', function() {
			modal.addClass('hide');
		});

		$(document).on('click', function(event) {
			if ( event.target.id == 'mW5' ) {
				modal.addClass('hide');
			}
		});

	});

// Date Today

$(function() {

	var dateNow = new Date(),
	todayInner = $('.today');
	// dateNow.toDateString();
	function formatDate(date) {

		var dd = date.getDate();
		if (dd < 10) dd = '0' + dd;

		var mm = date.getMonth() + 1;
		if (mm < 10) mm = '0' + mm;

		return dd + '.' + mm;
	};

	todayInner.text(formatDate(dateNow));
	// console.log(formatDate(dateNow));
});

// Characteristics Control

$(function() {

	var litreVal = $('.litre-val'),
	bkVal = $('.bk-val'),
	carVal = $('.car-val'),
	suhVal = $('.suh-val'),
	charImg = $('.char-img img'),
	weight = $('#weight'),
	inTank = $('#inTank'),
	cleanSpirt = $('#cleanSpirt'),
	inside = $('#inside'),
	insideButle = $('#insideButle');

	var fourteen = {
		urlA: 'img/14/14.jpg',
		urlC: 'img/14/14c.jpg',
		urlS: 'img/14/14s.jpg',
		urlCs: 'img/14/14cs.jpg',
		urlT: 'img/14/tank-14.jpg',
		weightA: '6 кг',
		weightC: '6 кг',
		weightS: '7 кг',
		weightCs: '10 кг',
		weightT: '4 кг',
		inTank: '10 л',
		cleanSpirt: '1 л',
		inside: '2.5 л',
		insideButle: '5 бутылок по 0.5'
	};

	var twentyTank = {
		urlA: 'img/20/20.jpg',
		urlC: 'img/20/20c.jpg',
		urlS: 'img/20/20s.jpg',
		urlCs: 'img/20/20cs.jpg',
		urlT: 'img/20/tank-20.jpg',
		weightA: '7 кг',
		weightC: '8 кг',
		weightS: '9 кг',
		weightCs: '11 кг',
		weightT: '5 кг',
		inTank: '20 л',
		cleanSpirt: '2 л',
		inside: '5.0 л',
		insideButle: '10 бутылок по 0.5'
	};

	var thirtyTank = {
		urlA: 'img/30/30.jpg',
		urlC: 'img/30/30c.jpg',
		urlS: 'img/30/30s.jpg',
		urlCs: 'img/30/30cs.jpg',
		urlT: 'img/30/tank-30.jpg',
		weightA: '9 кг',
		weightC: '10 кг',
		weightS: '11 кг',
		weightCs: '13 кг',
		weightT: '7 кг',
		inTank: '30 л',
		cleanSpirt: '3 л',
		inside: '7.5 л',
		insideButle: '15 бутылок по 0.5'
	};

	var fiftyTank = {
		urlA: 'img/50/50.jpg',
		urlC: 'img/50/50c.jpg',
		urlS: 'img/50/50s.jpg',
		urlCs: 'img/50/50cs.jpg',
		urlT: 'img/50/tank-50.jpg',
		weightA: '11 кг',
		weightC: '12 кг',
		weightS: '13 кг',
		weightCs: '15 кг',
		weightT: '9 кг',
		inTank: '38 л',
		cleanSpirt: '3.8 л',
		inside: '9.5 л',
		insideButle: '19 бутылок по 0.5'
	};

	// Litre 'Click' handler

	$(litreVal).on('click', function (event) {

		event.preventDefault();

		$(this).addClass('active').siblings().removeClass('active');

		var dataTank = $('a.litre-val.active').attr('data-tank');

		if ( bkVal.hasClass('active') ) {
			charImg.attr('src', eval (dataTank + '.urlT') );
			weight.text( eval (dataTank + '.weightT') );
		} else if ( suhVal.hasClass('active')  && carVal.hasClass('active') ) {
			charImg.attr('src', eval (dataTank + '.urlCs') );
			weight.text( eval (dataTank + '.weightCs') );
		} else if ( suhVal.hasClass('active') ) {
			charImg.attr('src', eval (dataTank + '.urlS') );
			weight.text( eval (dataTank + '.weightS') );
		} else if ( carVal.hasClass('active') ) {
			charImg.attr('src', eval (dataTank + '.urlC') );
			weight.text( eval (dataTank + '.weightC') );
		} else {
			charImg.attr('src', eval (dataTank + '.urlA') );
			weight.text( eval (dataTank + '.weightA') );
		};
		
		inTank.text( eval (dataTank + '.inTank') );
		cleanSpirt.text( eval (dataTank + '.cleanSpirt') );
		inside.text( eval (dataTank + '.inside') );
		insideButle.text( eval (dataTank + '.insideButle') );

	});

	// Tank 'Click' handler

	$(bkVal).on('click', function (event) {

		event.preventDefault();

		var dataTank = $('a.litre-val.active').attr('data-tank');

		charImg.attr('src', eval (dataTank + '.urlT') );
		weight.text( eval (dataTank + '.weightT') );
		$('.carSuh').addClass('hide');
		$(this).toggleClass('active');
		if ( bkVal.hasClass('active') ) {
			$(this).text('Аппарат в сборе');
		} else {
			$(this).text('Бак отдельно');
			charImg.attr('src', eval (dataTank + '.urlA') );
			weight.text( eval (dataTank + '.weightA') );
			$('.carSuh').removeClass('hide');
		};

	});

	// Carga 'Click' handler

	$(carVal).on('click', function (event) {

		event.preventDefault();

		var dataTank = $('a.litre-val.active').attr('data-tank');

		if ( suhVal.hasClass('active') ) {
			charImg.attr('src', eval (dataTank + '.urlCs') );
			weight.text( eval (dataTank + '.weightCs') );
		} else {
			charImg.attr('src', eval (dataTank + '.urlC') );
			weight.text( eval (dataTank + '.weightC') );
		};

		$(this).toggleClass('active');

		if ( carVal.hasClass('active') ) {
			$(this).html('<span>-</span> царга');
		} else {
			$(this).html('<span>+</span> царга');

			if ( suhVal.hasClass('active') ) {
				charImg.attr('src', eval (dataTank + '.urlS') );
				weight.text( eval (dataTank + '.weightS') );
			} else {
				charImg.attr('src', eval (dataTank + '.urlA') );
				weight.text( eval (dataTank + '.weightA') );
			};
		};

	});

	// Suhoparnik 'Click' handler

	$(suhVal).on('click', function (event) {

		event.preventDefault();

		var dataTank = $('a.litre-val.active').attr('data-tank');

		if ( carVal.hasClass('active') ) {
			charImg.attr('src', eval (dataTank + '.urlCs') );
			weight.text( eval (dataTank + '.weightCs') );
		} else {
			charImg.attr('src', eval (dataTank + '.urlS') );
			weight.text( eval (dataTank + '.weightS') );
		};

		$(this).toggleClass('active');

		if ( suhVal.hasClass('active') ) {
			$(this).html('<span>-</span> сухопарник');
		} else {
			$(this).html('<span>+</span> сухопарник');

			if ( carVal.hasClass('active') ) {
				charImg.attr('src', eval (dataTank + '.urlC') );
				weight.text( eval (dataTank + '.weightC') );
			} else {
				charImg.attr('src', eval (dataTank + '.urlA') );
				weight.text( eval (dataTank + '.weightA') );
			};
		};

	});


});

// Constructor

$(function() {
	
	var litreVl = $('.litre-vl'),
	formValue = $('#form-value, #modal-value'),
	formOld = $('#form-old'),
	imgConstr = $('.constructor-img'),
	mtextValue = $('#modal-text-value'),
	colVal = $('#col-val'),
	bakVal = $('#bak-val'),
	buyBtn = $('.btn.constr-btn.buy-btn'),
	modalBtn = $('.btn.modal-btn.modal-btn--buy'),
	hiddenComment = $('[name="DATA[COMMENTS]"]');
	// console.log(hiddenComment);

	var arrCompl = $('.compl-item');

	$(litreVl).on('click', function (e) {

		e.preventDefault();

		$(litreVl).removeClass('active');
		$(this).addClass('active');

		var dataTk = $('a.litre-vl.active').attr('data-tank');

		if ( bakVal.hasClass('active') ) {
			formOld.hide();
			if ( dataTk == 'fourteenTk' ) {
				formValue.text('3 200₴');
				imgConstr.css({
					background: 'url(/img/constructor/14l-nocolumn_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Бак Aquagradus Спектр на 14л');
				hiddenComment.val('Бак Aquagradus Спектр на 14л');
				// console.log(hiddenComment.val());
			} else if ( dataTk == 'twentyTk' ) {
				formValue.text('3 700₴');
				imgConstr.css({
					background: 'url(/img/constructor/20l-nocolumn_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Бак Aquagradus Спектр на 25л');
				hiddenComment.val('Бак Aquagradus Спектр на 25л');
			} else if ( dataTk == 'thirtyTk' ) {
				formValue.text('4 300₴');
				imgConstr.css({
					background: 'url(/img/constructor/30l-nocolumn_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Бак Aquagradus Спектр на 35л');
				hiddenComment.val('Бак Aquagradus Спектр на 35л');
			} else if ( dataTk == 'fiftyTk' ) {
				formValue.text('4 900₴');
				imgConstr.css({
					background: 'url(/img/constructor/50l-nocolumn_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Бак Aquagradus Спектр на 50л');
				hiddenComment.val('Бак Aquagradus Спектр на 50л');
			};
		} else {
			buyBtn.text('Купить аппарат');
			modalBtn.text('Купить аппарат');
			formOld.show();

			if ( dataTk == 'fourteenTk' ) {
				formOld.text('8 690₴');
				formValue.text('7 490₴');
				imgConstr.css({
					background: 'url(/img/constructor/14l-pro_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Самогонный аппарат с баком на 14л');
				hiddenComment.val('Самогонный аппарат с баком на 14л');
			} else if ( dataTk == 'twentyTk' ) {
				formOld.text('9 190₴');
				formValue.text('7 990₴');
				imgConstr.css({
					background: 'url(/img/constructor/20l-pro_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Самогонный аппарат с баком на 25л');
				hiddenComment.val('Самогонный аппарат с баком на 25л');
			} else if ( dataTk == 'thirtyTk' ) {
				formOld.text('9 790₴');
				formValue.text('8 590₴');
				imgConstr.css({
					background: 'url(/img/constructor/30l-pro_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Самогонный аппарат с баком на 35л');
				hiddenComment.val('Самогонный аппарат с баком на 35л');
			} else if ( dataTk == 'fiftyTk' ) {
				formOld.text('10 390₴');
				formValue.text('9 190₴');
				imgConstr.css({
					background: 'url(/img/constructor/50l-pro_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Самогонный аппарат с баком на 50л');
				hiddenComment.val('Самогонный аппарат с баком на 50л');
			};
		}
	});

	$(colVal).on('click', function(e) {

		e.preventDefault();

		$(this).toggleClass('active');
		$('#litre').toggleClass('hide');
		bakVal.removeClass('active');
		formOld.hide();


		formValue.text('5 500₴');
		imgConstr.css({
			background: 'url(/img/constructor/pro_big.jpg)',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'contain',
			backgroundPosition: 'top center'
		});
		mtextValue.text('Колонна Aquagradus Спектр');
		hiddenComment.val('Колонна Aquagradus Спектр');

		if ( colVal.hasClass('active') ) {
			colVal.text('Аппарат в сборе');
			bakVal.text('Бак отдельно');
			$(arrCompl).removeClass('hide');
			$.each(arrCompl, function(i, val) {
				if ( i > 4) {
					$(val).addClass('hide');
				};
			});
			buyBtn.text('Купить колонну отдельно');
			modalBtn.text('Купить колонну отдельно');
		} else {
			colVal.text('Колонна отдельно');
			formValue.text('7 490₴');
			formOld.text('8 690₴');
			formOld.show();
			imgConstr.css({
				background: 'url(/img/constructor/14l-pro_big.jpg)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'top center'
			});
			mtextValue.text('Самогонный аппарат с баком на 14л');
			hiddenComment.val('Самогонный аппарат с баком на 14л');
			$(litreVl).removeClass('active');
			$(litreVl[0]).addClass('active');
			$(arrCompl).removeClass('hide');
			$.each(arrCompl, function(i, val) {
				if ( i > 4 && i < 9) {
					$(val).addClass('hide');
				};
			});
			buyBtn.text('Купить аппарат');
			modalBtn.text('Купить аппарат');
		};

		
	});

	$(bakVal).on('click', function(e) {

		e.preventDefault();

		$(this).toggleClass('active');
		$('#litre').removeClass('hide');
		colVal.removeClass('active');
		formOld.hide();


		formValue.text('3 200₴');
		imgConstr.css({
			background: 'url(/img/constructor/14l-nocolumn_big.jpg)',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'contain',
			backgroundPosition: 'top center'
		});
		mtextValue.text('Бак Aquagradus Спектр на 14л');
		hiddenComment.val('Бак Aquagradus Спектр на 14л');
		$(litreVl).removeClass('active');
		$(litreVl[0]).addClass('active');

		if ( bakVal.hasClass('active') ) {
			bakVal.text('Аппарат в сборе');
			colVal.text('Колонна отдельно');

			$(arrCompl).removeClass('hide');
			$.each(arrCompl, function(i, val) {
				$(val).addClass('hide');
				if ( i > 3 ) {
					return false;
				}
			});
			buyBtn.text('Купить бак отдельно');
			modalBtn.text('Купить бак отдельно');
		} else {
			bakVal.text('Бак отдельно');
			formValue.text('7 490₴');
			formOld.text('8 690₴');
			formOld.show();
			imgConstr.css({
				background: 'url(/img/constructor/14l-pro_big.jpg)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'top center'
			});
			mtextValue.text('Самогонный аппарат с баком на 14л');
			hiddenComment.val('Самогонный аппарат с баком на 14л');
			$(litreVl).removeClass('active');
			$(litreVl[0]).addClass('active');
			$(arrCompl).removeClass('hide');
			$.each(arrCompl, function(i, val) {
				if ( i > 4 && i < 9) {
					$(val).addClass('hide');
				};
			});
			buyBtn.text('Купить аппарат');
			modalBtn.text('Купить аппарат');
		};

		
	});

});

// Parallax

$(function() {

	$(window).mousemove(function(e) {
		var change;
		var xpos=e.clientX;
		var ypos=e.clientY;
		var left= change*20;
		var  xpos=xpos*2;ypos=ypos*2;
		$('.layer-1').css('top',((80-(ypos/30))+"px"));
		$('.layer-1').css('left',(( 280-(xpos/50))+"px"));

	});

});

// Tab Recipe

$(function() {

	var winWidth = $(window).width();

	if ( winWidth < 767 ) {
		$('.tab-cont-r').not(':first').hide();
	} else {
		$('.tab-menu-r').hide();
	};


	$('.tab-link-r').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tab-cont-r').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tab-link-r').on('click', function(e) {
		
		e.preventDefault();

		var dataTab = $(this).data('tab');
		var getWrapper = $(this).closest('.tab-recipe');
		var tabLink = $('.tab-link-r[data-tab='+dataTab+']');

		getWrapper.find('.tab-link-r').removeClass('active');
		tabLink.addClass('active');

		getWrapper.find('.tab-cont-r').hide();
		getWrapper.find('.tab-cont-r[data-tab='+dataTab+']').fadeIn('slow');
	});

	$(".swipe-r").swipe( {

		swipeLeft: function(event, direction, distance, duration, fingerCount, fingerData) {

			// $(this).text("You swiped " + direction );
			var dataTab = $(this).data('tab');
			var dataTabNext = dataTab.split("");
			dataTabNext[3] = +dataTabNext[3] + 1;

			dataTabNext = dataTabNext.join("");


			var getWrapper = $(this).closest('.tab-recipe');
			var tabLink = $('.tab-link-r[data-tab='+dataTabNext+']');


			// console.log(dataTab);
			// console.log(dataTabNext);

			if ( dataTab !== 'tab2' ) {
				getWrapper.find('.tab-cont-r').hide();
				getWrapper.find('.tab-cont-r[data-tab='+dataTabNext+']').fadeIn('slow');

				getWrapper.find('.tab-link-r').removeClass('active');
				tabLink.addClass('active');
			}
			
    	},

    	swipeRight: function(event, direction, distance, duration, fingerCount, fingerData) {

			var dataTab = $(this).data('tab');
			var dataTabNext = dataTab.split("");
			dataTabNext[3] = +dataTabNext[3] - 1;
			dataTabNext = dataTabNext.join("");


			var getWrapper = $(this).closest('.tab-recipe');
			var tabLink = $('.tab-link-r[data-tab='+dataTabNext+']');
			
			if ( dataTab !== 'tab0' ) {

				getWrapper.find('.tab-cont-r').hide();
				getWrapper.find('.tab-cont-r[data-tab='+dataTabNext+']').fadeIn('slow');

				getWrapper.find('.tab-link-r').removeClass('active');
				tabLink.addClass('active');
    		}
    	}

  	});

  	//Set some options later
  	$(".swipe-r").swipe( {fingers:1} );

});

// Tab Modes

$(function() {

	$('.tab-cont').not(':first').hide();

	$('.tab-link').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tab-link-d').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tab-cont').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tab-link, .tab-link-d').on('click', function(e) {
		
		e.preventDefault();

		var dataTab = $(this).data('tab');
		var getWrapper = $(this).closest('.mode');
		var tabLink = $('.tab-link[data-tab='+dataTab+'], .tab-link-d[data-tab='+dataTab+']');

		getWrapper.find('.tab-link, .tab-link-d').removeClass('active');
		tabLink.addClass('active');

		getWrapper.find('.tab-cont').hide();
		getWrapper.find('.tab-cont[data-tab='+dataTab+']').fadeIn('slow');
	});

	$(".swipe").swipe( {

		swipeLeft: function(event, direction, distance, duration, fingerCount, fingerData) {

			// $(this).text("You swiped " + direction );
			var dataTab = $(this).data('tab');
			var dataTabNext = dataTab.split("");
			dataTabNext[3] = +dataTabNext[3] + 1;

			dataTabNext = dataTabNext.join("");


			var getWrapper = $(this).closest('.mode');
			var tabLink = $('.tab-link[data-tab='+dataTabNext+'], .tab-link-d[data-tab='+dataTabNext+']');


			// console.log(dataTab);
			console.log(dataTabNext);

			if ( dataTab !== 'tab4' ) {
				getWrapper.find('.tab-cont').hide();
				getWrapper.find('.tab-cont[data-tab='+dataTabNext+']').fadeIn('slow');

				getWrapper.find('.tab-link, .tab-link-d').removeClass('active');
				tabLink.addClass('active');
			}
			
    	},

    	swipeRight: function(event, direction, distance, duration, fingerCount, fingerData) {

			var dataTab = $(this).data('tab');
			var dataTabNext = dataTab.split("");
			dataTabNext[3] = +dataTabNext[3] - 1;
			dataTabNext = dataTabNext.join("");


			var getWrapper = $(this).closest('.mode');
			var tabLink = $('.tab-link[data-tab='+dataTabNext+'], .tab-link-d[data-tab='+dataTabNext+']');
			
			if ( dataTab !== 'tab0' ) {

				getWrapper.find('.tab-cont').hide();
				getWrapper.find('.tab-cont[data-tab='+dataTabNext+']').fadeIn('slow');

				getWrapper.find('.tab-link, .tab-link-d').removeClass('active');
				tabLink.addClass('active');
    		}
    	}

  	});

  	//Set some options later
  	$(".swipe").swipe( {fingers:1} );

});

// Tab Additionally

$(function() {

	$('.tab-content').hide();

	$('.tablink').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tab-content').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tablink').on('click', function(e) {
		
		e.preventDefault();

		var dataTab = $(this).data('tab');
		var getWrapper = $(this).closest('.additionally-goods');

		getWrapper.find('.tab').removeClass('active');
		$(this).closest('.tab').addClass('active');
		getWrapper.find('.tab-content').hide();
		getWrapper.find('.tab-content[data-tab='+dataTab+']').fadeIn('slow');

	});

	$('.tab-close').on('click', function(e) {
		
		e.preventDefault();

		var dataTab = $(this).data('tab');
		var getWrapper = $(this).closest('.additionally-goods');

		getWrapper.find('.tab-content').fadeOut('fast');
		getWrapper.find('.tab').removeClass('active');

	})

});

// Scroll to

$(function() { // fridayblack

	$('.more a, #menu a, .goto a, .card-block a, .banner a, .bannerm a').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 75}, 2000); // анимируем скроолинг к элементу scroll_el

	    if ( $(window).width() < 768 && $(this).hasClass('h-menu') ) {
	    	// console.log(this);
	    	$('.icon').toggleClass('active');
	    	var menu = $('#menu');
	    	menu.slideToggle();
	    };	    
	}
	    return false; // выключаем стандартное действие
	});

});

// Accardeon FAQ

$(function() {

	$('.accordeon .card>.collapse').not(':eq(1)').hide();
	$('.accordeon .card .x-link').not(':eq(1)').addClass('collapsed');

	$('.accordeon .card .x-link').on('click', function(e) {
		e.preventDefault();
		console.log('click');
		
		var findCollapse = $(this).closest('.card-header').next('.collapse');
		console.log(findCollapse);

		var findWrapper = $(this).closest('.accordeon');
		console.log(findWrapper);

		if ( findCollapse.is(':visible') ) {
			findCollapse.slideUp();
			findWrapper.find('.card .x-link').addClass('collapsed');
		} else {
			findWrapper.find('.card>.collapse').slideUp();
			findCollapse.slideDown();
			findWrapper.find('.card .x-link').addClass('collapsed');
			$(this).removeClass('collapsed');
		};

		
	});

});


// Scroll Header

$(function() {

	$(window).scroll(function() {

		var winWidth = $(window).width();

		if ( winWidth > 767 && winWidth < 1090 ) {
			if ( $(this).scrollTop() > 580 ) {
				$('.header-navbar .btnHead').show();
				$('.headChar').hide();
			} else {
				$('.header-navbar .btnHead').hide();
				$('.headChar').show();
			};
		} else if ( winWidth > 767 ) {
			if ( $(this).scrollTop() > 580 ) {
				$('.header-navbar .btnHead').show();
			} else {
				$('.header-navbar .btnHead').hide();
			};
		};

	});

});

// Drag img

$(function() {

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

// Burger bar

$(function() {
	
	$('.icon').on('click', function(e) {
		e.preventDefault();

		$('.icon').toggleClass('active');

		var menu = $('#menu');

		menu.slideToggle();
	});

});

//E-mail Ajax Send

$(function() { // fridayblack

	$("#headerCall, #bf-call, #headerForm, #formBuy, #aboutCall, #formAdd, #question, #char-form, #formBonus, #formVideo, #formTank").submit(function() { //Change
		var th = $(this);
		var submitButton = th.find("button[type='submit']");
		console.log(submitButton);
		submitButton.addClass('btn-disable').prop("disabled", true);

		$.ajax({
			type: "POST",
			url: "rest.php", //Change
			data: th.serialize()
		}).done(function() {
			// alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				location.href = "/sps/";
				// th.trigger("reset");
			}, 500);
		});
		return false;
	});


});

//E-mail Ajax Send

$(function() { // fridayblack

	$("#modalBook").submit(function() { //Change
		var th = $(this);
		var submitButton = th.find("button[type='submit']");
		console.log(submitButton);
		submitButton.addClass('btn-disable').prop("disabled", true);

		$.ajax({
			type: "POST",
			url: "rest.php", //Change
			data: th.serialize()
		}).done(function() {
			// alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				location.href = "/spsbook/";
				// th.trigger("reset");
			}, 500);
		});
		return false;
	});


});

$(function() {
	$('[type="tel"]').mask('+389999999999');
});

$(function() {

	$('.red-more').on('click', function(e) {
		e.preventDefault();
		
		$('.hide-tip').toggle('slow');
		$(this).text('Свернуть');

		if ( !$(this).hasClass('active') ) {
			$(this).addClass('active');
		} else {
			$(this).text('Больше информации ... ');
		};

	});

});

$(function() {

	function updater(d, h, m, s) {
  // День сброса - 27 сентября 2015 года (и далее каждые три дня)
  var baseTime = new Date(2018, 1, 6);
  // Период сброса — 3 дня
  var period = 3*24*60*60*1000;

  function update() {
  	var cur = new Date();
    // сколько осталось миллисекунд
    var diff = period - (cur - baseTime) % period;
  	// console.log(diff % 1000);
    // сколько миллисекунд до конца секунды
    var millis = diff % 1000;
    diff = Math.floor(diff/1000);
    // сколько секунд до конца минуты
    var sec = diff % 60;
    if(sec < 10) sec = "0"+sec;
    diff = Math.floor(diff/60);
    // сколько минут до конца часа
    var min = diff % 60;
    if(min < 10) min = "0"+min;
    diff = Math.floor(diff/60);
    // сколько часов до конца дня
    var hours = diff % 24;
    if(hours < 10) hours = "0"+hours;
    var days = Math.floor(diff / 24);
    d.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = min;
    s.innerHTML = sec;

    // console.log(days);

    if ( days < '1' ) {
    	// console.log(days);
    	$('.timer--red').css('color', '#EE4034');
    };

    // следующий раз вызываем себя, когда закончится текущая секунда
    setTimeout(update, millis);
}
setTimeout(update, 0);
}

updater(document.getElementById("days1"),
	document.getElementById("hours1"),
	document.getElementById("minutes1"),
	document.getElementById("seconds1"));

updater(document.getElementById("days2"),
	document.getElementById("hours2"),
	document.getElementById("minutes2"),
	document.getElementById("seconds2"));

updater(document.getElementById("days3"),
	document.getElementById("hours3"),
	document.getElementById("minutes3"),
	document.getElementById("seconds3"));

});


$(function() {
	
	var goTo = $('#goto'),
	sticky = goTo.offset().top,
	timeHeader = $('.time-wrap');

	$(window).scroll(function() {

		var topPos = $(this).scrollTop();

		if ( $(window).width() > 767 ) {
			if ( topPos >= sticky ) {
				timeHeader.removeClass('animateHide');

			} else {
				timeHeader.addClass('animateHide');

			}
		} else {
			if ( topPos >= sticky ) {
				timeHeader.addClass('active');

			} else {
				timeHeader.removeClass('animateHide');
				timeHeader.removeClass('active');
				timeHeader.addClass('animateHideMob');
				$('#time-text').text('Акция: ');
			}
		}



	});

});

$(function() {
	
	setInterval(function() {

		$('.header-bonus').toggleClass('blink');

	}, 1000);

});