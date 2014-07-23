var gulp = require("gulp"),
    jasmine = require("gulp-jasmine"),
    header = require("gulp-header"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    pkg = require("./package.json");

var d = new Date();
var releaseDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear()

var fileStack = [
  "src/tpl_wrapper.js",
  "src/tpl.js"
];

var banner = "// Stik-core - Version: <%= pkg.version %> | From: <%= date %>\n"

gulp.task("test", function(){
  gulp.src("specs.js")
      .pipe(jasmine());
});

gulp.task("pack", function(){
  gulp.src(fileStack)
      .pipe(concat("stik-dom-lib-loader.js"))
      .pipe(header(banner, { pkg: pkg, date: releaseDate }))
      .pipe(gulp.dest("dist"))
      .pipe(concat("stik-dom-lib-loader.min.js"))
      .pipe(uglify({ mangle: false }))
      .pipe(gulp.dest("dist"));
});
