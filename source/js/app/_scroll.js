import { trigger } from '../util/_element';

export function scrollTo(element, to, duration) {
  if (duration === 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}

export function smoothScroll(){
  const $elements = document.querySelectorAll('.js-scroll');

  [].forEach.call($elements, function(element){
    element.addEventListener('click', function( event ){
      event.preventDefault();

      if( document.body.classList.contains('on') ) {
        trigger( document.querySelector('.js-menu-trigger'), 'click');
      }

      let target = element.getAttribute('data-target');
      scrollTo(document.querySelector('html'), document.querySelector('.'+target).offsetTop, 800);
    });
  });
}

