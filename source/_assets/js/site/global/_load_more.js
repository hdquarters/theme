var loadMore = function(container, item){
  var $item     = $(container).find(item);
  var $button   = $(container).find('.js-load_more');
  var itemsSize = $($item).size();
  var x         = 9;

  $(container).find(item+':lt('+x+')').fadeIn();

  if(x < itemsSize) {
    $button.show();
  } else {
    $button.hide();
  }

  $button.unbind();
  $button.on("click", function () {
    x = (x + 9 <= itemsSize) ? x + 9 : itemsSize;

    $(container).find(item+':lt('+x+')').fadeIn();

    if(x === itemsSize){
      $(this).hide();
    }
  });
}


var filter = function() {

  $('.js-shield_button').on("click", function(){
    var shield = $(this).data("shield");
    $('.filter-item').hide();

    loadMore('.filter', '.filter-item[data-shield='+shield+']');
  });
}
filter();
