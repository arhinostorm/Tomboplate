module.exports = function(grunt) {
/*
    Grunt installation:
    -------------------
        npm install -g grunt-cli
        npm install -g grunt-init
        npm init (creates a `package.json` file)

    Project Dependencies:
    ---------------------
        npm install grunt --save-dev
        npm install grunt-contrib-watch --save-dev
        npm install grunt-contrib-uglify --save-dev
        npm install grunt-contrib-compass --save-dev
    Simple Dependency Install:
    --------------------------
        npm install (from the same root directory as the `package.json` file)

*/
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Metadata.
    meta: {
      basePath: '',
      srcPath: ''
    },
    compass: {
      compile: {
        options: {
          sassDir: 'sass',
          cssDir: 'css',
          specify: 'sass/*.scss'
        }
      },
      compileWithConfigFile: {
        options: {
          config: 'config.rb'
        }
      },
      clean: {
        options: {
          clean: true
        }
      },
      options: {
        outputStyle: 'expanded'
      }
    },

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'js/release/jquery.min.js':['js/jquery-1.9.1.min.js']
        }
      }
    },
    watch: {
        sass: {
            files: ['<%= meta.srcPath %>/**/*.scss'],
            tasks: ['compass']
        },
        javascripts: {
          files: ['<%= meta.srcPath %>/js/**/*.js'],
          tasks: ['uglify']
        }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
 
  grunt.registerTask('default', ['compass','uglify']);

};