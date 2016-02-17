module.exports = function(grunt) {

    grunt.initConfig({

        watch: {
            dev: {
                files: ["src/**/*", "!src/icons/*", "!src/psd/*"],
                tasks: ["dev"]
            }
        },

        sass: {
            dev: {
                options: {
                    style: "expanded"
                },
                    src: "src/scss/main.scss",
                    dest: "src/css/sass-styles.css"
                }
        },

        cssmin: {
            dev: {
                src: ["src/css/vendor/*.css", "src/css/sass-styles.css"],
                dest: "src/css/style.min.css"
            }
        },

        autoprefixer: {
            dev: {
                options: {
                    browsers: ["Firefox >= 29", "Chrome >= 34", "Opera >= 12", "ie >= 9"]
                },
                    src: ["src/css/style.min.css", "src/css/style.min.css"]
                }
        },        

        clean: {
            dist: {
                src: ["dist/**/*"]
            },
            
            build: {
                src: ["dist/**/*"]
            }
        },
        
        concat: {
            options: {
              separator: ';',
            },
            build: {
              src: ["src/js/vendor/*.js", "src/js/*.js", "!src/js/concat-scripts.js", "!src/js/scripts.min.js"],
              dest: "src/js/concat-scripts.js"
            },
          },        

        uglify: {
            build: {
                options: {
                    mangle: false
                },
                    src: "src/js/concat-scripts.js",
                    dest: "src/js/scripts.min.js"
            }
        },        

        htmlmin: {
            options: {
                collapseWhitespace: true
            },
            dist: {
                src: "src/index.html",
                dest: "dist/index.html"
            }
        },

        imagemin: {
            options: {
                optimizationLevel: 4
            },
            dist: {
                files: [   
                    {expand: true,
                    cwd: "src/img/",
                    src: "*",
                    dest: "dist/img/"}           
                ]
            }
        },

        copy: {
            dist: {
                files: [
                    {expand: true, cwd: 'src/css/', src: "style.min.css", dest: "dist/css/"},
                    {expand: true, cwd: 'src/js/', src: "scripts.min.js", dest: "dist/js/"},			      
                    {expand: true, cwd: 'src/fonts/', src: "*", dest: "dist/fonts/"},
                    {expand: true, cwd: 'src/', src: ["*", "!index.html"], dest: "dist/", filter: 'isFile'}			      
                ]
            }
        }

    });


grunt.loadNpmTasks("grunt-contrib-watch");
grunt.loadNpmTasks("grunt-contrib-sass");
grunt.loadNpmTasks("grunt-autoprefixer");	
grunt.loadNpmTasks("grunt-contrib-cssmin");
grunt.loadNpmTasks("grunt-contrib-clean");
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks("grunt-contrib-uglify");
grunt.loadNpmTasks("grunt-contrib-htmlmin");
grunt.loadNpmTasks("grunt-contrib-imagemin");
grunt.loadNpmTasks("grunt-contrib-copy");

grunt.registerTask("dev", ["sass", "cssmin", "autoprefixer"]);
grunt.registerTask("dist", ["clean", "htmlmin", "imagemin", "copy"]);
grunt.registerTask("default", ["dev", "watch"]);
grunt.registerTask("build", ["sass", "cssmin", "autoprefixer", "concat", "uglify", "clean", "htmlmin", "imagemin", "copy"]);

};