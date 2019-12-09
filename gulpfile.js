const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const csso = require('gulp-csso');
const concat = require('gulp-concat');

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

// Сreate minify task
gulp.task('minify', function (){
  gulp.src('./css/style.css')
  .pipe(csso())
  .pipe(concat('style.min.css'))
  .pipe(gulp.dest('./css'));
});