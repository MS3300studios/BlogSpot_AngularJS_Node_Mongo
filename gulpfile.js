var gulp = require('gulp');
let concat = require("gulp-concat");
let sourcemaps = require("gulp-sourcemaps");
let uglify = require("gulp-uglify");
let ngAnnotate = require("gulp-ng-annotate");
let nodemon = require('gulp-nodemon')

gulp.task('js', (done)=>{
    gulp.src(["ng/module.js","ng/**/*.js"])
    .pipe(sourcemaps.init())
    .pipe(concat("app.js"))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("assets"));
    done();
});

gulp.task('nodemonON', ()=>{
 nodemon({
   script: "server.js",  
   ext: "js",
   ignore: ["ng*","gulp*","assets*"]
 })
})

gulp.task('s', gulp.parallel("js","nodemonON"))
gulp.task('start', gulp.parallel("js","nodemonON"))