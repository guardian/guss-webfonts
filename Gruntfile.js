module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-aws-s3');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-gh-pages');
	grunt.loadNpmTasks('grunt-release');
	grunt.loadNpmTasks('grunt-sassdoc');
	grunt.loadNpmTasks('grunt-scss-lint');

	grunt.task.renameTask('release', 'git-release');

	grunt.initConfig({
		fontsVersion: '1.0.0@test',
		aws_s3: {
			options: {
				uploadConcurrency: 5,
				differential: true,
				overwrite: false,
				displayChangesOnly: true,
			},
			pasteup: {
				options: {
					accessKeyId: grunt.option('id'),
					secretAccessKey: grunt.option('secret'),
					sessionToken: grunt.option('session'),
					region: 'eu-west-1',
					bucket: 'pasteup-prod',
					access: '',
					params: {
						CacheControl: 'max-age=315360000',
						GrantFullControl:
							'id=d6760a17be54adc770b35167669a729e90fe1649322113a6aea68af641337042',
						GrantRead: 'uri=http://acs.amazonaws.com/groups/global/AllUsers',
					},
				},
				files: [
					{
						expand: true,
						cwd: 'webfonts',
						src: ['**/*.{eot,svg,ttf,woff,woff2}'],
						dest: 'webfonts/<%= fontsVersion %>',
					},
				],
			},
		},
	});

	grunt.registerTask('release', ['aws_s3:pasteup']);
};
