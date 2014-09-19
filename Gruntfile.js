module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-aws-s3');

    grunt.initConfig({
        fontsVersion: '0.1.0',
        aws_s3: {
            pasteup: {
                options: {
                    accessKeyId: grunt.option('id'),
                    secretAccessKey: grunt.option('secret'),
                    region: 'eu-west-1',
                    uploadConcurrency: 5,
                    downloadConcurrency: 5,
                    bucket: 'pasteup-prod',
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

    grunt.registerTask('release:fonts', function (type) {
        var releaseTarget = type ? ':' + type : '';
        grunt.task.run(['build', 'git-release' + releaseTarget, 'clean:docs', 'hologram:buttons', 'gh-pages:docs']);
    });
};
