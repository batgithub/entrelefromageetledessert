module.exports = function(grunt){

	// load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
	//lancement de toutes les tâches sans avoir à les lister
    require('load-grunt-tasks')(grunt);

	//création des têches
	grunt.initConfig({	//initialisation de l'ensemble des tâches


  sass: {                              // Task
      dev: {                            // Target
        files: {                         // Dictionary of files
          'dev/style.css': 'dev/sass/style.scss'
        },
        options: {
          update: true,
          sourcemap: 'none',
        }
      }
  },

  autoprefixer: {
    dist :{
       files: {
         // Target-specific file lists and/or options go here.
         'dev/style-autoprefixer.css':'dev/style.css',
       }
    }
   },

		watch: {
			options: {
      		livereload: true,
    	},
    	html: {
				files: ['**/*.html']
			},
			sass : {
				files: ['dev/sass/**/*.scss'],
				tasks: ['sass:dev'],
				options: { spawn: false }
			}
		}

		// copy: {
		// 	main: {
		// 		files: [
		// 			 // makes all src relative to cwd
		// 			 {expand: true, cwd: 'dev/', src: ['FONT/**','IMG/**','*.html'], dest: 'dist/'},
		// 		]
		// 	},
		// },




	});

	//lanceur de tâche
	grunt.registerTask('dev', ['compass:dev']),
  grunt.registerTask('ap', ['autoprefixer']),
	grunt.registerTask('uncss', ['uncss']),
  grunt.registerTask('deploy', ['compass:dist','copy:main'])


}
