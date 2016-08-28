module.exports = function(grunt, options){

  var projectDev = options.projectDev;
  var projectDir = options.projectDir;
  var projectVendor = options.projectVendor;

  return {
    options: {
      mangle: {
        except: ['jQuery', 'Cookies']
      }
    },
    site: {
      files: {
        '<%= projectDir %>js/site/scripts.min.js':
        [
        '<%= projectVendor %>jquery/dist/jquery.min.js',
        '<%= projectDev %>js/site/vendor/_annyang.js',
        '<%= projectDev %>js/site/app/_module.js',
        '<%= projectDev %>js/site/app/_analytics.js',
        '<%= projectDev %>js/site/app/_detection.js',
        '<%= projectDev %>js/site/app/_mediator.js',
        '<%= projectDev %>js/site/app/_plugins.js',
        '<%= projectDev %>js/site/global/_load_more.js',
        '<%= projectDev %>js/site/global/_search.js',
        '<%= projectDev %>js/site/global/_github.js',
        '<%= projectDev %>js/site/global/_global.js',
        '<%= projectDev %>js/site/_app.js',
        ]
      }
    }
  };
};
