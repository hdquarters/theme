export function eventAnalytics(eventCategory, eventAction, eventLabel) {
  ga('send', {
    hitType: 'event',
    eventCategory: eventCategory,
    eventAction: eventAction,
    eventLabel: eventLabel
  });
}
