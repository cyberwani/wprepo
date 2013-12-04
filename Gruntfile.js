/*
 * wprepo
 * https://github.com/Kaiser Franz Josef/wprepo
 * Copyright (c) 2013
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
 grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: 'assets'
        },
        files: {
          'index.html': ['src/index.hbs']
        }
      }
    }

  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');

  // Default tasks to be run.
  grunt.registerTask('default', ['assemble']);
};

