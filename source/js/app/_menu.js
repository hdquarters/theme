export function menuTrigger(){
  const $body = document.body;
  const $menuTrigger = $body.getElementsByClassName('js-menu-trigger')[0];

  if ( typeof $menuTrigger !== 'undefined' ) {
    $menuTrigger.addEventListener('click', function() {
      if( $body.classList.contains('on') ){
        $body.classList.remove('on');
      } else {
        $body.classList.add('on');
      }
    });
  }
}
