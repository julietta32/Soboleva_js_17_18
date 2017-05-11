module.exports = function(grunt) {

  grunt.initConfig({
concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/build/script.main.js',
          src: ['css/src/*.css'],
        dest: 'css/build/main.css'
      }},
    uglify:{
    dist: {
        src: ['js/build/script.main.js'],
        dest: 'js/build/script.main.min.js',
        src: ['css/build/main.css'],
        dest: 'css/build/main.min.css'
      }
        
}
    }),

  grunt.loadNpmTasks('grunt-contrib-concat');
 grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};