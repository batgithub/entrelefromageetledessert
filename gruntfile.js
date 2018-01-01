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
                    sourcemap: 'auto'

                }
            },
            prod: {                            // Target
                files: {                         // Dictionary of files
                    'prod/style.css': 'dev/sass/style.scss'
                },
                options: {
                    update: true,
                    sourcemap: 'none',
                    style:'compressed'

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
            sass: {
                files: ['dev/sass/**/*.scss'],
                tasks: ['sass:dev'],
                options: { spawn: false }
            },
            grunt: {
                files: ['gruntfile.js'],
            }
        }

	});

	//lanceur de tâche
	grunt.registerTask('default', ['sass:dev','watch']);
    grunt.registerTask('deploy', ['sass:prod','autoprefixer']);




};
