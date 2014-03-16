
var gulp = require('gulp');
var minify = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var smoosh = require('gulp-smoosher');

var scripts = [
     'bower_components/foundation/js/vendor/*.js'
    ,'bower_components/foundation/js/foundation.js'
    ,'site_assets/scripts/includes/*.js'
    ,'site_assets/scripts/*.js'
];

var styles = [
     'bower_components/foundation/css/normalize.css'
    ,'bower_components/foundation/css/foundation.css'
];

var results = [
     'scripts.min.js'
    ,'styles.min.css'
    ,'_index.html'
];


gulp.task('scripts', function () {
    gulp.src(scripts)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('.'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('.'));
});


gulp.task('styles', function () {
    gulp.src(styles)
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('.'))
        .pipe(rename('styles.min.css'))
        .pipe(minify())
        .pipe(gulp.dest('.'));
});


gulp.task('html', function () {
    gulp.src('_index.html')
        .pipe(rename('index.html'))
        .pipe(smoosh())
        .pipe(minifyHTML())
        .pipe(gulp.dest('.'));
});


gulp.task('watch', function () {
    gulp.watch(scripts, ['scripts']);
    gulp.watch(styles, ['styles']);
    gulp.watch(results, ['html']);
});


gulp.task('default', ['scripts', 'styles', 'watch']);
