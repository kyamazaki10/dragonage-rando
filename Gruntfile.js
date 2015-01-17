module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            src: [
                'Gruntfile.js',
                'src/app/javascripts/*.js'
            ]
        },

        clean: {
            build: {
                src: ['build']
            }
        },

        uglify: {
            all: {
                files: {
                    'build/javascripts/<%= pkg.name %>.min.js': [
                        'src/vendor/javascripts/*.js',
                        'src/app/javascripts/*.js'
                    ]
                }
            }
        },

        copy: {
            build: {
                files: [
                    {
                        src: 'src/index.html',
                        dest: 'build/',
                        expand: true,
                        flatten: true
                    },
                    {
                        src: 'src/**/*.css',
                        dest: 'build/stylesheets',
                        expand: true,
                        flatten: true
                    }
                ]
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    /*grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');*/

    grunt.registerTask('default', [
    ]);

    grunt.registerTask('build', 'compiles everything...', [
        'clean',
        'uglify',
        'copy'
    ]);

};