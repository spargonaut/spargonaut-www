module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");

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
                        src : ["*.html", "js/*.js", "images/*"],
                        dest : 'prod/'
                    }
                ]
            }
        },

        watch : {
            files : ["src/**/*"],
            tasks : ["default"]
        }
    });
};