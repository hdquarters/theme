export function trigger(element, customEvent) {
  const event = document.createEvent('HTMLEvents');
  event.initEvent(customEvent, true, false);
  element.dispatchEvent(event);
}
