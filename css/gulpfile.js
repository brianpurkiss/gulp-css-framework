// To install any missing dependencies, right click the file 'package.json' and choose 'NPM install packages'

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


// primary gulp build

gulp.task('sass', function () {
  return gulp
    .src('*.scss')

    .pipe(sass(
      {outputStyle: 'compressed'}
    ).on('error', sass.logError))

    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))

    .pipe(gulp.dest(''));
});


// gulp watch

gulp.task('sassWatch', function () {
  gulp.watch(['*.scss','components/**/*.scss','../bootstrap/stylesheets/*.scss','../bootstrap/stylesheets/**/*.scss'], ['sass']);
});
