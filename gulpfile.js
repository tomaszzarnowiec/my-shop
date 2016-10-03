'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass:compile', function () {
    gulp.src('./assets/style/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/style/css'));
});

gulp.task('sass', function () {
  gulp.watch('./assets/style/sass/**/*.scss', ['sass:compile']);
});
