
var gulp = require('gulp');
var minify = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var smoosh = require('gulp-smoosher');

var scripts = [
     'vendor_assets/foundation-essentials/js/vendor/*.js'
    ,'vendor_assets/foundation-essentials/js/*.js'
    ,'site_assets/scripts/includes/*.js'
    ,'site_assets/scripts/*.js'
];

var styles = [
     'vendor_assets/foundation-essentials/css/*.css'
    ,'site_assets/styles/*.css'
];

var results = [
     'scripts.min.js'
    ,'styles.min.css'
    ,'_index.html'
];


gulp.task('scripts', function () {
    gulp.src(scripts)
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('.'));
});


gulp.task('styles', function () {
    gulp.src(styles)
        .pipe(concat('styles.min.css'))
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
