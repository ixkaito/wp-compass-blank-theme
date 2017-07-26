const config        = require('../bathe.config.js');
const gulp          = require('gulp');
const watch         = require('gulp-watch');

gulp.task('watch', function () {
  if (config.tasks.imagemin) {
    watch(config.assets + '/' + config.imagemin.src + '/**/*', function () {
      gulp.start('imagemin');
    });
  }

  if (config.tasks.sass) {
    watch(config.assets + '/' + config.sass.src + '/**/*', function () {
      gulp.start('sass');
    });
  }

  if (config.tasks.browsersync) {
    watch([
      '!./node_modules/**/*',
      '!./README.md',
      './**/*.php',
      config.sass.dest + '/**/*',
      config.js.dest + '/**/*',
      config.imagemin.dest + '/**/*'
    ], function () {
      gulp.start('browser-reload');
    });
  }
});