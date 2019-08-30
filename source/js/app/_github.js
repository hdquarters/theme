import { makeRequestJson } from '../util/_request';

// https://api.github.com/users/hemersonvianna/orgs

const $home = document.querySelector('.page-home');
const $projects = document.querySelector('.page-projetos');

if ($home || $projects) {
  const response = makeRequestJson({
    headers: {
      'Content-Type': 'application/json'
    },
    url: 'https://api.github.com/users/hemersonvianna/orgs'
  });

  response.then(success => {
    const data = success.filter(item => item.login.indexOf('descco') >= 0).map(item => {
      return {
        avatar: item.avatar_url,
        name: item.login.replace('descco-', ''),
        description: item.description,
        url: item.url
      }
    });
    console.log(data);
  });
}
