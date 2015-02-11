module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            src: [
                'Gruntfile.js',
                'src/app/javascripts/*.js'
            ]
        },

        watch: {
            files: [
                'src/**/*'
            ],
            tasks: [
                'clean',
                'concat',
                'copy'
            ]
        },

        clean: {
            build: {
                src: [
                    'build'
                ]
            }
        },

        concat: {
            build: {
                src: [
                    'src/vendor/javascripts/*.js',
                    'src/app/javascripts/*.js'
                ],
                dest: 'build/javascripts/<%= pkg.name %>.js'
            }
        },

        uglify: {
            all: {
                files: {
                    'build/javascripts/<%= pkg.name %>.js': [
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
                    },
                    {
                        src: 'src/app/dialogue.json',
                        dest: 'build/dialogue.json'
                    }
                ]
            }
        },

        connect: {
            server: {
                options: {
                    base: 'build',
                    hostname: 'localhost',
                    port: 8000,
                    keepalive: false
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', [
        'clean',
        'concat',
        'copy',
        'connect',
        'watch'
    ]);

    grunt.registerTask('prod', '', [
        'clean',
        'concat',
        'uglify',
        'copy',
        'connect'
    ])
};