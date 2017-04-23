module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-exec');

  grunt.initConfig({
    exec: {
      build: {
        command: 'node node_modules/requirejs/bin/r.js -o require-config.js'
      }
    }
  });

  grunt.registerTask('copy-require', function() {
	grunt.log.write("creating dirrectory");
    grunt.file.mkdir('build/js/lib');
	
	grunt.log.write("before copy files");
    grunt.file.copy('node_modules/requirejs/require.js',
                    'build/js/lib/require.js');
					
	grunt.log.write("END");
  });

  grunt.registerTask('default', 'exec copy-require');
};