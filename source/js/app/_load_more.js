export function loadMore($container, item) {
  const $items     = $container.querySelectorAll(item);
  const $button    = $container.querySelector('.js-load_more');
  const itemsSize  = $items.length;
  let x            = 9;

  [].forEach.call($items, function(element, index) {
    if( index < x ){
      element.style.display = "block";
    }
  });

  if($button){
    if(x < itemsSize) {
      $button.style.display = "block";
    } else {
      $button.style.display = "none";
    }

    $button.addEventListener("click", function () {
      x = (x + 9 < itemsSize) ? x + 9 : itemsSize;

      [].forEach.call($items, function(element, index) {
        if( index < x ){
          element.style.display = "block";
        }
      });

      if(x === itemsSize){
        $button.style.display = "none";
      }
    });
  }
};

export function filter() {
  if( document.querySelector('.js-shield_button') ){
    const $buttons = document.querySelectorAll('.js-shield_button');

    [].forEach.call($buttons, function(element, index) {
      element.addEventListener("click", function(){
        let shield = this.getAttribute("data-shield");
        const $filters = document.querySelectorAll('.filter-item');

        [].forEach.call($filters, function(element, index) {
          element.style.display = "none";
        });

        loadMore(document.querySelector('.filter'), '.filter-item[data-shield='+shield+']');
      });
    });
  }
};
