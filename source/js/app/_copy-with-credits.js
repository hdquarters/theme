const copyWithCredits = () => {
  const $bodyElement  = document.getElementsByTagName('body')[0];
  const $element      = document.createElement('div');
  const url           = document.location.href;
  let pagelink;
  let selection;
  let copytext;

  pagelink = " - Leia mais em "+ url +" - &copy; Nerd Calistênico";

  selection = window.getSelection();
  copytext = selection + pagelink;

  $element.style.position='absolute';
  $element.style.left='-99999px';

  $bodyElement.appendChild($element);
  $element.innerHTML = copytext;
  selection.selectAllChildren($element);

  window.setTimeout(function() {
    $bodyElement.removeChild($element);
  },0);
}

document.oncopy = copyWithCredits;
