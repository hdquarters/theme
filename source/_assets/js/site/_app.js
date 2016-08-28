Module("HV.Application", function(Application){
	Application.fn.initialize = function() {

	};
});

$(function(){
    
	Module.run("HV.Application");

	var dispatcherBody = $('body').data('dispatcher');
    var deviceBody = $('body').data('device');

    // apenas para desktop
    if( deviceBody === 'desktop' ) {
    }

    // apenas para diferente de phone
    if( deviceBody != 'phone' ) {
    }

    // Apenas para mobile
    if( deviceBody === 'phone' ) {
    }
    
});
