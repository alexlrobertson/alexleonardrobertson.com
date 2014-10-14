module.exports = function(grunt) {

	grunt.config.set('ngtemplates', {
    'alr.admin': {
      src: '**/admin.*.html',
      dest: 'templates/admin.js'
    }
	});

	grunt.loadNpmTasks('grunt-angular-templates');
};
