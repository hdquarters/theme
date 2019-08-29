import { eventAnalytics } from '../util/_analytics';

// Analytics
export default blogname => {
  const $mainMenu = document.querySelectorAll('.mainMenu-link');
  [...$mainMenu].map(element => {
    element.addEventListener("click", event => eventAnalytics('menu principal','clique', event.currentTarget.href));
  });

  const $socialMenu = document.querySelectorAll('.socialMenu-link');
  [...$socialMenu].map(element => {
    element.addEventListener("click", event => eventAnalytics('menu social','clique', event.currentTarget.href));
  });

  const $articlesHome = document.querySelectorAll('.page-home .box--article-link');
  if ($articlesHome) {
    [...$articlesHome].map(element => {
      element.addEventListener("click", event => eventAnalytics(`${blogname} - pagina inicial - artigo`,'clique', event.currentTarget.href));
    });
  }
  const $categoriesHome = document.querySelectorAll('.page-home .categories-link');
  if ($categoriesHome) {
    [...$categoriesHome].map(element => {
      element.addEventListener("click", event => eventAnalytics(`${blogname} - pagina inicial - categoria`,'clique', event.currentTarget.href));
    });
  }

  const $articlesCategory = document.querySelectorAll('.page-category .box--article-link');
  if ($articlesCategory) {
    [...$articlesCategory].map(element => {
      element.addEventListener("click", event => eventAnalytics(`${blogname} - categoria - artigo`,'clique', event.currentTarget.href));
    });
  }
  const $categoriesCategory = document.querySelectorAll('.page-category .categories-link');
  if ($categoriesCategory) {
    [...$categoriesCategory].map(element => {
      element.addEventListener("click", event => eventAnalytics(`${blogname} - categoria - outra categoria`,'clique', event.currentTarget.href));
    });
  }

  const $articleArticles = document.querySelectorAll('.page-artistas .box--article-link');
  if ($articleArticles) {
    [...$articleArticles].map(element => {
      element.addEventListener("click", event => eventAnalytics(`${blogname} - artigos - artigo`,'clique', event.currentTarget.href));
    });
  }
  const $categoryArticles = document.querySelectorAll('.page-artistas .categories-link');
  if ($categoryArticles) {
    [...$categoryArticles].map(element => {
      element.addEventListener("click", event => eventAnalytics(`${blogname} - artigos - categoria`,'clique', event.currentTarget.href));
    });
  }

  const $openSearch = document.querySelector('.search-button');
$openSearch.addEventListener("click", event => eventAnalytics('mostrar busca','clique', `${blogname}`));
}
