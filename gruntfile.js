module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['js/*.js']
    },

    sass: {
      options: {
        implementation: require('sass'), // Sử dụng Dart Sass
        sourceMap: true
      },
      files: {
        'css/styles.css': 'scss/styles.scss' // Đường dẫn đến file SCSS và file CSS đầu ra
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');  // Sử dụng grunt-sass

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'sass']);
};
