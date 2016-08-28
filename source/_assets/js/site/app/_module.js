(function(context) {
    "use strict";

    function Module(namespace, callback, object) {
        var components = namespace.split(/[.:]+/),
            scope = context,
            component, last;

        if (typeof callback !== "function") {
            object = callback;
            callback = null;
        }

        object = object || build();

        for (var i = 0, count = components.length; i < count; i++) {
            last = (i === count - 1);
            scope[components[i]] = (last ? object : scope[components[i]] || {});
            scope = scope[components[i]];
        }

        if (callback) {
            callback.call(scope, scope, scope.prototype);
        }

        return scope;
    }

    Module.fetch = function(namespace) {
        var components = namespace.split("."),
            scope = context;

        for (var i = 0, count = components.length; i < count; i++) {
            scope = scope[components[i]];

            if (!scope) {
                break;
            }
        }

        return scope;
    };

    Module.run = function(namespace, args) {
        var module = Module.fetch(namespace);

        if (typeof module === 'function') {
            return module.apply(null, args || []);
        }
    };

    function build() {
        var Constructor, Instance;

        Constructor = function() {
            var instance = new Instance();
            instance.initialize.apply(instance, arguments);
            return instance;
        };

        Instance = function() {};
        Instance.prototype = Constructor.prototype;

        Constructor.fn = Constructor.prototype;
        Constructor.fn.initialize = function() {};
        return Constructor;
    }

    Module.wrapper = function(namespace, initializer) {
        return new Module(namespace, function(Definition) {
            Definition.fn.initialize = function(namespace, callback) {
                initializer.apply(Definition, arguments);
            };

            return Definition;
        });
    };

    context.Module = Module;
})(window);

// Bind para o IE8
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5 internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function () {},
        fBound = function () {
          return fToBind.apply(this instanceof fNOP && oThis
             ? this
             : oThis,
           aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}