var analytics = (function() {

    var eventAnalytics = function(eventCategory, eventAction, eventLabel) {
        dataLayer.push({
            'event': 'GAevent',
            'eventCategory': eventCategory,
            'eventAction': eventAction,
            'eventLabel': eventLabel
        });
    }

    return {
        eventAnalytics: eventAnalytics
    };

}());