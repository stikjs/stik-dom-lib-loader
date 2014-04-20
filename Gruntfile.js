module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    jasmine: {
      src: [
        'node_modules/stik.js/stik.js',
        'node_modules/stik-labs.js/stik-labs.js',
        'node_modules/stik-helpers.js/stik-helpers.js',
        'stik-dom-lib-loader.js'
      ],
      options: {
        specs: "specs.js"
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      stik: {
        files: {
         "stik-dom-lib-loader.min.js": ["stik-dom-lib-loader.js"]
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-jasmine");

  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask('test', 'jasmine');
  grunt.registerTask('pack', 'uglify');
};
