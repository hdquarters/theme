import { eventAnalytics } from '../util/_analytics';

// Analytics
export default (blogname, isMain) => {
  const $mainMenu = document.querySelectorAll('.mainMenu-link');
  const $socialMenu = document.querySelectorAll('.socialMenu-link');

  [...$mainMenu].map(element => {
    element.addEventListener("click", event => eventAnalytics('menu principal','clique', event.currentTarget.href));
  });

  [...$socialMenu].map(element => {
    element.addEventListener("click", event => eventAnalytics('menu social','clique', event.currentTarget.href));
  });


  if (isMain) {
    const $organizationsHome = document.querySelectorAll('.page-home .organizations-link');
    const $blogsHome = document.querySelectorAll('.page-home .segment-link');

    if ($organizationsHome) {
      [...$organizationsHome].map(element => {
        element.addEventListener("click", event => eventAnalytics('pagina inicial - organizacoes','clique', event.currentTarget.href));
      });
    }

    if ($blogsHome) {
      [...$blogsHome].map(element => {
        element.addEventListener("click", event => eventAnalytics('pagina inicial - blogs','clique', event.currentTarget.href));
      });
    }

    const $organizationsPage = document.querySelectorAll('.page-organizations .organizations-link') || document.querySelectorAll('.page-organizacoes .organizations-link');

    if ($organizationsPage) {
      [...$organizationsPage].map(element => {
        element.addEventListener("click", event => eventAnalytics('organizacoes','clique', event.currentTarget.href));
      });
    }

    const $projectsPage = document.querySelectorAll('.page-projects .projects-link') || document.querySelectorAll('.page-projetos .projects-link');

    if ($projectsPage) {
      [...$projectsPage].map(element => {
        element.addEventListener("click", event => eventAnalytics('projetos','clique', event.currentTarget.href));
      });
    }

    const $followingPage = document.querySelectorAll('.page-following .professionals-list a') || document.querySelectorAll('.page-seguindo .professionals-list a');

    if ($followingPage) {
      [...$followingPage].map(element => {
        element.addEventListener("click", event => eventAnalytics('seguindo','clique', event.currentTarget.href));
      });
    }

    const $hallOfFamePage = document.querySelectorAll('.page-hall-of-fame .people-list a') || document.querySelectorAll('.page-salao-da-fama .people-list a');

    if ($hallOfFamePage) {
      [...$hallOfFamePage].map(element => {
        element.addEventListener("click", event => eventAnalytics('salao da fama','clique', event.currentTarget.href));
      });
    }

  } else {
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
}
