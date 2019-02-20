let gulp = require("gulp");
let sass = require("gulp-sass");
let autoprefixer = require("gulp-autoprefixer");
let uglify = require('gulp-uglify');
let concat = require('gulp-concat');


function styles() {
    return (
        gulp
            .src("sass/*.sass")
            .pipe(sass({ outputStyle: "compressed" }))
            .on("error", sass.logError)
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(gulp.dest("css"))
    );
}

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
