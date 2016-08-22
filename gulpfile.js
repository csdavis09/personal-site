var gulp = require('gulp');
var plugins = require('plugins');
var md = require('gulp-markdown');
var fs = require('fs');
var del = require('del');
var dateformat = require('dateformat');
var through2 = require('through2');
var Bsync = require('browser-sync');
var sequence = require('gulp-sequence');

gulp.task("personal-site", function() {
  return gulp.src("src/posts/**/*.md")
             .pipe(md())
             .pipe(gulp.dest("dist/personal-site"));
});

gulp.task("clean", function() {
  del(["dist"]);
});

gulp.task("default", sequence("clean", "personal-site"));

