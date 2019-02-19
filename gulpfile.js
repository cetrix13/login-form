let gulp = require("gulp");
let sass = require("gulp-sass");

function styles() {
    return (
        gulp
            .src("sass/*.sass")
            .pipe(sass({ outputStyle: "compressed" }))
            .on("error", sass.logError)
            .pipe(gulp.dest("css"))
    );
}

function watch(){
    gulp.watch('sass/*.sass', styles)
}

exports.watch = watch
