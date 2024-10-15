module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Cấu hình các nhiệm vụ ở đây
    sass: {
      options: {
        implementation: require('sass'),
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'sass', // Thư mục chứa file SASS
          src: ['**/*.scss'],
          dest: 'build/css', // Nơi lưu file CSS sau khi biên dịch
          ext: '.css'
        }]
      }
    },
    concat: {
      js: {
        src: ['src/**/*.js'],
        dest: 'build/js/app.js', // Nơi lưu file JavaScript sau khi nối
      }
    },
    // Các nhiệm vụ khác...
  });

  // Tải các plugin
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Đăng ký nhiệm vụ mặc định
  grunt.registerTask('default', ['sass', 'concat']);
};
