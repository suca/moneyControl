module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        libsdir: 'bower_components',

        concat: {
            options: {
                separator: ';'
            },
            distJS: {
                src: ['src/**/*.js'],
                dest: 'dist/js/<%= pkg.name %>.js'
            },
            distCSS: {
                src: ['css/*.css'],
                dest: 'dist/css/<%= pkg.name %>.css'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            distJS: {
                files: {
                    'dist/js/<%= pkg.name %>.min.js': ['<%= concat.distJS.dest %>']
                }
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    {
                        expand: true, 
                        src: ['index.html'], 
                        dest: 'dist'
                    },
                    {
                        src: '<%=  libsdir %>/angular/angular.min.js',
                        dest : 'dist/libs/angular.js'
                    },
                    {
                        src: '<%=  libsdir %>/jquery-2.1.1.min/index.js',
                        dest : 'dist/libs/jquery.js'
                    },
                    {
                        src: '<%=  libsdir %>/jquery.mobile-css/index.css',
                        dest : 'dist/libs/jquery-mobile.css'
                    },
                    {
                        src: '<%=  libsdir %>/jquery.mobile-git/index.js',
                        dest : 'dist/libs/jquery-mobile.js'
                    },
                ]
            }
        }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['concat', 'uglify', 'copy']);

};