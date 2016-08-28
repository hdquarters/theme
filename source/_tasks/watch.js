module.exports = function(grunt, options){

  var projectDev = options.projectDev;
  var projectDir = options.projectDir;

  return {
    site: {
      files: [
        '<%= projectDev %>scss/site/{,*/, **/, **/**/*,**/*}*.{scss,sass}',
        '<%= projectDev %>js/site/{,*/,**/}*.js',
        '<%= projectDir %>css/site/{,*/, **/}*.css'
      ],
      tasks: ['dev']
    }
  };
};
