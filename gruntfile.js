module.exports = function(grunt) {
    // Định nghĩa cấu hình
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // Cấu hình Sass
        sass: {
            options: {
                implementation: require('sass'), // Sử dụng thư viện Sass đã cài
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'sass/',
                    src: ['*.scss'],
                    dest: 'css/',
                    ext: '.css'
                }]
            }
        },

        // Cấu hình jshint
        jshint: {
            files: ['Gruntfile.js', 'js/*.js']
        },
    });

    // Tải các plugin cần thiết
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Đăng ký task mặc định
    grunt.registerTask('default', ['jshint', 'sass']);
    grunt.registerTask('build', ['default']); // Đăng ký task build
};
