module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask("default", ["less", "copy"]);
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
        },

        copy : {
            main : {
                files : [
                    {
                        expand : true,
                        cwd : "src/",
                        src : ["*.html"],
                        dest : 'prod/'
                    }
                ]
            }
        }
    });
};