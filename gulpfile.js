const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const merge = require('merge-stream');

// Add prefixes, concatinate and minify CSS
function styles() {
    const sassStream = gulp
            .src("sass/*.sass")
            .pipe(sass({ outputStyle: "compressed" }))
            .on("error", sass.logError)
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }));
    const cssStream = gulp
            .src('css/*.css')
            .pipe(concat('styles.css'));

    const mergedStream = merge(sassStream, cssStream)
        .pipe(concat('styles.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest("css/prod/"));

    return mergedStream;
}

// Concatinate and minify JS
function js() {
    return (
        gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest("js/prod/"))
    );
}

function watch(){
    gulp.series(styles, js);
    gulp.watch('sass/*.sass', styles);
    gulp.watch('js/*.js', js);
}

exports.watch = watch;
