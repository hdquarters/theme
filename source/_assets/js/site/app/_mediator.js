Module("HV.mediator", function(mediator) {

    this.channels = {};
    
    mediator.installTo = function(obj) {
        HV.mediator.obj.sub = this.sub;
        HV.mediator.obj.pub = this.pub;
    };

    mediator.pub = function(channel) {
        if (!this.channels[channel]) {
            return false;
        }
        var args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0, l = this.channels[channel].length; i < l; i++) {
            var subscription = this.channels[channel][i];
            subscription.callback.apply(subscription.context.args);
        }

        return this;
    };

    mediator.sub = function(channel, fn) {
        if (!this.channels[channel]) {
            this.channels[channel] = [];
        }
        this.channels[channel].push({
            context: this,
            callback: fn
        });

        return this;
    };

}, {});

/*
AdressForm now has the 'on', 'off' and 'trigger' methods
$.extend(forms.fn, MAG.mediator);
*/