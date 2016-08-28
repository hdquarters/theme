var detection = function() {

    /*
	deteccao de tamanho p/ media query
	==================================================
	*/
    var deviceSize = 'small';
    var documentWidth = window.innerWidth;
    if (documentWidth >= 992) {
        deviceSize = 'large';
    } else if (documentWidth >= 768) {
        deviceSize = 'medium';
    }

    var getDeviceSize = function() {
        return deviceSize;
    };

    /*
	deteccao de página em iframe/modal
	==================================================
	*/
    var isIframe;
    if (top !== self) {
        isIframe = true;
    }

    var getIsIframe = function() {
        return isIframe;
    };

    return {
        getDeviceSize: getDeviceSize,
        getIsIframe: getIsIframe
    };

}();