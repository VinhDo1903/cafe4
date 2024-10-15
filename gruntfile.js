module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['js/*.js']
    },

    sass: {
      options: {
        implementation: require('sass'), 
        sourceMap: true
      },
      files: {
        'css/styles.css': 'scss/styles.scss' 
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');  

  grunt.registerTask('default', ['jshint', 'sass']);
};
