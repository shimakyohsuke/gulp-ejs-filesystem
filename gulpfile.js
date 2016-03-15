'use strict';

var gulp = require('gulp');
var ejs = require('gulp-ejs');
var plumber = require('gulp-plumber');
var fileSystem = require('fs');

gulp.task('ejs', function () {
    return gulp.src('./src/ejs/*.ejs')
        .pipe(plumber())
        .pipe(ejs(
            {
                config: JSON.parse(fileSystem.readFileSync('./data/config.json')),
                page: JSON.parse(fileSystem.readFileSync('./data/page.json')),
                loop: require('./data/loop.js')
            },
            {
                ext: '.html'
            }
        ))
        .pipe(gulp.dest('./dist/'));
});
