let gulp = require("gulp");
let sass = require("gulp-sass");
let minifyCSS = require('gulp-minify-css');
let autoprefixer = require("gulp-autoprefixer");
let uglify = require('gulp-uglify');
let concat = require('gulp-concat');
let merge = require('merge-stream');

// Add prefixes, concatinate and minify CSS
function styles() {
    let sassStream = gulp
            .src("sass/*.sass")
            .pipe(sass({ outputStyle: "compressed" }))
            .on("error", sass.logError)
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }));
    let cssStream = gulp
            .src('css/*.css')
            .pipe(concat('styles.css'));

    let mergedStream = merge(sassStream, cssStream)
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
    gulp.watch('sass/*.sass', styles);
    gulp.watch('js/*.js', js);
}

exports.watch = watch;
