export function disableSelection(target) {
  if (typeof target.onselectstart !== 'undefined') {
    //For IE
    target.onselectstart =  () => false;
  } else if (typeof target.style.MozUserSelect !== 'undefined') {
    //For Firefox
    target.style.MozUserSelect = 'none';
  } else {
    //All other route (For Opera)
    target.onmousedown = () => false;
  }

  target.style.cursor = 'default';
};
