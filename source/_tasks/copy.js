module.exports = function(grunt, options){

  var projectDev = options.projectDev;
  var projectDir = options.projectDir;
  var projectRoot = options.projectRoot;

  return {
    archives : {
      files: [{
        expand: true,
        dot: true,
        cwd   : '<%= projectDev %>archives/',
        src   : '{,*/,**/}*',
        dest  : '<%= projectRoot %>'
      }]
    },
    fonts : {
      files: [{
        expand: true,
        cwd   : '<%= projectDev %>fonts/',
        src   : '{,*/,**/}*.{otf,eot,svg,ttf,woff}',
        dest  : '<%= projectDir %>css/fonts/'
      }]
    }
  };
};
