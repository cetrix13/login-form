let gulp = require("gulp");
let sass = require("gulp-sass");
let autoprefixer = require("gulp-autoprefixer");


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

function watch(){
    gulp.watch('sass/*.sass', styles)
}

exports.watch = watch
