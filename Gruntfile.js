module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-aws-s3');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-scss-lint');

    grunt.initConfig({
        fontsVersion: '0.1.0',

        clean: {
            build: [
                'build'
            ],
        },
        scsslint: {
            options: {
                bundleExec: true,
                config: 'scss-lint.yml',
                reporterOutput: null
            },
            webfonts: [
                'src/**/_*.scss'
            ]
        },
        sass: {
            buttons: {
                options: {
                    style: 'compressed',
                    bundleExec: true
                },
                files:  [{
                    expand: true,
                    cwd: 'src',
                    src: [
                        '**/*.scss',
                        '!**/_*.scss'
                    ],
                    dest: 'build',
                    ext: '.min.css'
                }]
            }
        },
        aws_s3: {
            pasteup: {
                options: {
                    accessKeyId: grunt.option('id'),
                    secretAccessKey: grunt.option('secret'),
                    region: 'eu-west-1',
                    bucket: 'pasteup-prod',
                    uploadConcurrency: 5,
                    differential: true,
                    displayChangesOnly: true,
                    access: '',
                    params: {
                        CacheControl: 'max-age=315360000',
                        GrantFullControl: 'id=d6760a17be54adc770b35167669a729e90fe1649322113a6aea68af641337042',
                        GrantRead: 'uri=http://acs.amazonaws.com/groups/global/AllUsers'
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'webfonts',
                    src: [
                        '**/*.{eot,svg,ttf,woff,woff2}',
                    ],
                    dest: 'fonts/<%= fontsVersion %>'
                }]
            }
        }
    });

    grunt.registerTask('validate', ['scsslint']);
    grunt.registerTask('build', ['validate', 'clean:build', 'sass']);
    grunt.registerTask('release:fonts', ['aws_s3:pasteup']);
};
