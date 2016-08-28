var orgs = [
  "prime-solutions",
  "resource-solutions",
  "doc-solutions",
  "knowledge-solutions",
  "test-solutions",
  "crud-solutions",
  "game-solutions",
  "experiment-solutions",
  "language-solutions",
  "math-solutions",
  "algorithm-solutions",
  "system-solutions",
  "uml-solutions",
  "brazilian-dev"
]

var html = '';
var obj;

var request = function(repo) {
  $.ajax({
    method: "GET",
    dataType: "json",
    url: 'https://api.github.com/users/' + repo + '/repos'
  }).done(function(data) {
    localStorage.setItem(repo.replace('-', ''), JSON.stringify(data));
    pop( mountObject(data), repo);
  });

}

var mountObject = function(data) {
  var result = [];

  for (var i = 0, len = data.length; i < len; i++) {
    if (data[i]['description']) {
      obj             = {};
      obj.name        = data[i]['name'];
      obj.description = data[i]['description'];
      obj.url         = data[i]['html_url'];
      obj.org         = data[i]['owner']['login'];

      result.push(obj);
    }
  }
  return result;
}

var pop = function(result, repo){
  for (var i = 0, len = result.length; i < len; i++) {
    var name   = result[i]['name'];
    var shield = result[i]['org'].split("-")[0];
    var org    = result[i]['org'].replace("-solutions", "");

    html += '<li class="filter-item" data-shield="'+shield+'">';
    html +=   '<a class="filter-item-core" href="'+result[i]['url']+'">';
    html +=     '<em class="filter-item-flag shield-'+shield+'">'+org+'</em>';
    html +=     '<strong class="filter-item-title">'+name+'</strong>';
    html +=     '<span class="filter-item-text">'+result[i]['description']+'</span>';
    html +=   '</a>';
    html += '</li>';
  }

  if(repo === 'brazilian-dev'){
    $('.filter-list').removeClass("loading");
    $('.filter-list').append(html);
    loadMore('.filter', '.filter-item');
  }
}

var init = function() {
  if( localStorage.braziliandev ){
    for (var i = 0, len = orgs.length; i < len; i++) {
      var org = orgs[i].replace('-', '');
      pop( mountObject( JSON.parse(localStorage[org]) ), orgs[i]);
    }
  } else {
    for (var i = 0, len = orgs.length; i < len; i++) {
      request(orgs[i]);
    }
  }
}


if( $('.filter-list').length ) {
  $('.filter-list').addClass("loading");
  init();
}
