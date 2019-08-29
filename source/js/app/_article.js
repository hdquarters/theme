export function externalLink(){
  if( document.querySelector('.article-content a') ){
    const $links = document.querySelectorAll('.article-content a');
    if ($links.constructor === Array && $links.length > 0) {
      $links.map((element) => {
        const expression  = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        const value       = element.getAttribute('href');

        if( expression.test( value ) ){
          element.setAttribute('target', '_blank');
        }
      });
    }
  }
}
