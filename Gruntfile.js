module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-contrib-less");

    grunt.registerTask('default', ["less"]);
    grunt.initConfig({
        less : {
           development : {
               options : {
                   compress : true,
                   yuicompress : true,
                   optimization : 2
               },
               files : {
                    "prod/styles/styles.css" : "src/less/styles.less"
               }
           }
        }
    });
};