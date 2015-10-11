/*
 * Make sure Grunt and it"s necessary dependancies are installed...
 * npm install
 * npm install -g grunt-cli
 * npm install grunt --save-dev
 * npm install jshint-junit-reporter
 * npm install grunt-contrib-concat --save-dev
 * npm install grunt-contrib-jshint --save-dev
 * npm install grunt-junit-report --save-dev
 * npm install grunt-xsltproc --save-dev
 * npm install grunt-phplint
 * Ensure PHP is in the path
 */
/* global module, require */
var mode = "Dev";
// mode = "Prod";

module.exports = function exports(grunt) {
    var eslint_config = ".eslintrc";
    if ("Dev" === mode) {
        eslint_config = ".eslintrcDev";
    }

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    src: {
        files: [
            "./gruntfile.js",
            "./tests/tests.js"

//            "./LocalizedCode.js",
//            "./script/broken.js",
//            "./script/Consts.js",
//            "./script/Extensions.js",
//            "./script/Requires.js",
//            "./script/app/ux/**/*.js",
//            "./script/app/model/*.js",
//            "./script/app/store/*.js",
//            "./script/app/view/**/*.js",
//            "./script/app/controller/*.js",
//            "./script/app/controller/**/*.js",
//            "./script/app.js"
        ]
    },

        /* http://eslint.org/ */
    eslint: {
        target: ["<%= src.files %>"],
        options: {
            config:     eslint_config,
            format:     require("eslint-html-reporter"),
            outputFile: "./reports/output/eslint-output.html"
        }
    },


    // Mocha
    mocha_config: {
        reporter: "./node_modules/good-mocha-html-reporter", //good-mocha-html-reporter, spec, nyan
        timeout: 15000,
        bail: false,
        savePath: "", // the path to desired location
        filename: "report.html", // filename gets attached at the end of savePath
        mode: "Verbose"
    },

    mocha: {
      all: {
        src: ["tests/testrunner.html"]
      },
      options: {
        // reporter : "./node_modules/mocha/lib/reporters/HTML",
        // reporter : "HTML",
        // reporter : "XUnit",
        reporter: "HTMLCov",
        dest: "./reports/output/mocha.html",

        run: true
      }
    }
  });

  grunt.loadNpmTasks("grunt-eslint");
  grunt.loadNpmTasks("grunt-mocha");

  grunt.registerTask("default", ["eslint", "mocha"]);
};