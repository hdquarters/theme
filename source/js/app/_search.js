import { makeRequestJson } from '../util/_request';

export function search(path, searchId, contentId) {
  makeRequestJson({ url: path }).then((datas) => {
    const $input = document.getElementById(searchId);
    const $resultContent = document.getElementById(contentId);

    $input.addEventListener('input', function() {
      $resultContent.innerText = '';

      if (this.value.trim().length === 0) {
        return;
      }

      const keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
      let str = '<ul class="search-result-list">';

      [...datas.items].map((data) => {
        let isMatch = true;
        let dataTitle = data.title.trim().toLowerCase();
        let dataContent = data.description.trim().replace(/<[^>]+>/g,"").toLowerCase();
        let dataUrl = data.link;
        let indexTitle = -1;
        let indexContent = -1;
        let firstOccur = -1;

        if(dataTitle !== '' && dataContent !== '') {
          keywords.forEach(function(keyword, i) {
            indexTitle = dataTitle.indexOf(keyword);
            indexContent = dataContent.indexOf(keyword);
            if( indexTitle < 0 && indexContent < 0 ){
              isMatch = false;
            } else {
              if (indexContent < 0) {
                indexContent = 0;
              }
              if (i == 0) {
                firstOccur = indexContent;
              }
            }
          });
        }

        if (isMatch) {
          str += `
            <li class="search-result">
              <a class="search-result-link" href="${dataUrl}">
                <strong class="search-result-title">${dataTitle}</strong>
          `;
          let content = data.description.trim().replace(/<[^>]+>/g,"");
          if (firstOccur >= 0) {
            let start = firstOccur - 20;

            if(start < 0){
              start = 0;
            }

            let matchContent = content.substr(start, 120);

            keywords.map((keyword) => {
              const regS = new RegExp(keyword, "gi");
              matchContent = matchContent.replace(regS, `<em class="search-result-keyword">${keyword}</em>`);
            });

            str += `<span class="search-result-text">${matchContent}...</span>`;
          }
          str += '</a></li>';
        }
      });

      str += '</ul>';

      $resultContent.innerHTML = str;
    });
  });
}
