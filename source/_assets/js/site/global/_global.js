$(function(){
  'use strict';

  var $body = document.body;
  var $menu_trigger = $body.getElementsByClassName('js-menu-trigger')[0];

  var $menu1 = $body.getElementsByClassName('accessibilitymenu')[0];
  var $menu2 = $body.getElementsByClassName('mainmenu')[0];

  if ( typeof $menu_trigger !== 'undefined' ) {
    $menu_trigger.addEventListener('click', function() {

      if($('body').hasClass('on')){
        $('body').removeClass('on');
      } else {
        $('body').addClass('on');
      }
      $menu2.style.top =  $menu1.clientHeight+'px';
    });
  }

	if( localStorage.contrast === 'true' ){
		$('body').addClass('contrast');
	}

	$('.js-contrast').on('click', function( event ){
		event.preventDefault();

    if($('body').hasClass('on')) {
      $('.js-menu-trigger').trigger('click');
    }

    $('body').toggleClass('contrast');

		if( localStorage.contrast === 'true' ){
			localStorage.removeItem('contrast');
		} else {
			localStorage.setItem('contrast', 'true');
		}
    });

	$('.js-scroll').on('click', function( event ){
		event.preventDefault();

    if($('body').hasClass('on')) {
      $('.js-menu-trigger').trigger('click');
    }

		var target = $(this).data('target');
        $('html, body').stop().animate({
			scrollTop: $( '.'+target ).offset().top
		}, 1500);
    });


	if ( annyang && $('.home').length ) {
		annyang.setLanguage('pt-br');

//		function retira_acentos_voz(palavra) {
//			com_acento = 'áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ ,.;/';
//			sem_acento = 'aaaaaeeeeiiiiooooouuuucaaaaaeeeeiiiiooooouuuuc-----';
//
//			nova='';
//			for(i=0;i<palavra.length;i++) {
//			  if (com_acento.search(palavra.substr(i,1))>=0) {
//				nova+=sem_acento.substr(com_acento.search(palavra.substr(i,1)),1);
//			  }
//			  else {
//			   nova+=palavra.substr(i,1);
//			 }
//			}
//			return nova.toLowerCase();
//		}

		var commands = {
			'conteúdo': function() {
				$('.js-scroll').trigger('click');
			},
			'contraste': function() {
				$('.js-contrast').trigger('click');
			},
			'acessibilidade': function() {
				$('.js-accessibility').trigger('click');
			}
		};

		//annyang.debug();
		// Add our commands to annyang
		annyang.addCommands(commands);
		// Start listening.
		annyang.start();
	}

	// Links externos dos posts
	$('.article-content a').each(function(){
		var expression = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
		var value    = $(this).attr('href');

		if( expression.test( value ) ){
			$(this).attr('target', '_blank');
		}
	});


  // load more
  $('.js-load_more-container').each(function(){
    loadMore(this, '.js-load_more-item');
  });

  // search
  $(".search-button").on("click", function(){
    $('.search').fadeIn();
    $('.search-input').focus();
  });
  $(".search-close").on("click", function(){
    $('.search').fadeOut();
    $('.search-input').val('');
  });
});
