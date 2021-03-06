module.exports = function (grunt) {

    "use strict";

    // Project configuration.
    grunt.initConfig({
        jshint: {
            options: {
                camelcase: true,
                immed: true,
                node: true,
                quotmark: "double",
                strict: true,
                trailing: true,
                undef: true,
                white: true
            },
            all: [
                "Gruntfile.js",
                "tasks/*.js",
                "<%= nodeunit.tests %>"
            ]
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: [
                "tmp"
            ]
        },

        // Configuration to be run (and then tested).
        montage: {
            spaces: {
                files: {
                    "tmp/spaces": [
                        "test/fixtures-set2/*.png"
                    ]
                }
            },
            defaults: {
                files: {
                    "tmp/defaults": [
                        "test/fixtures-set1/*.png"
                    ]
                }
            },
            basic: {
                files: {
                    "tmp/basic": [
                        "test/fixtures-set1/*.png"
                    ]
                },
                options: {
                    size: 24,
                    prefix: ".test",
                    outputImage: "test.png",
                    outputStylesheet: "test.css"
                }
            },
            widthHeight: {
                files: {
                    "tmp/width_height": [
                        "test/fixtures-set1/*.png"
                    ]
                },
                options: {
                    size: {
                        width: 10,
                        height: 20
                    },
                    prefix: ".test",
                    outputImage: "test.png",
                    outputStylesheet: "test.css"
                }
            },
            singleRow: {
                files: {
                    "tmp/singleRow": [
                        "test/fixtures-set1/*.png"
                    ]
                },
                options: {
                    size: 10,
                    arrange: {
                        rows: 1
                    }
                }
            },
            singleCol: {
                files: {
                    "tmp/singleCol": [
                        "test/fixtures-set1/*.png"
                    ]
                },
                options: {
                    size: 10,
                    arrange: {
                        cols: 1
                    }
                }
            },
            base: {
                files: {
                    "tmp/base": [
                        "test/fixtures-set1/*.png"
                    ]
                },
                options: {
                    prefix: ".base",
                    outputImage: "base.png",
                    outputStylesheet: "base.css",
                    baseRules: {
                        display: "inline-block",
                        "text-indent": "-9999px"
                    }
                }
            }
        },

        // Unit tests.
        nodeunit: {
            tests: [
                "test/*_test.js"
            ]
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks("tasks");

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-nodeunit");

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this plugin's task(s), then test the result.
    grunt.registerTask("test", [
        "clean",
        "montage",
        "nodeunit"
    ]);

    // By default, lint and run all tests.
    grunt.registerTask("default", [
        "jshint",
        "test"
    ]);

};