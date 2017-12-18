var gulp         = require('gulp');
var sass         = require('gulp-sass');
var clean        = require('gulp-clean');
var browserSync  = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS     = require('gulp-clean-css');
var imagemin     = require('gulp-imagemin');
var runSequence  = require('run-sequence');
var concat       = require('gulp-concat');
var htmlmin      = require('gulp-htmlmin');

gulp.task('styles', function () {
    return gulp.src('src/scss/app.scss')
               .pipe(sass({
                    sourceComments: 'map',
                    sourceMap: 'sass',
                    outputStyle: 'expanded'
               })
               .on('error', sass.logError))
               .pipe(autoprefixer())
               .pipe(gulp.dest('src/css'))
               .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function() {
    return gulp.src(['src/scripts/jquery.min.js',
                     'src/scripts/*.js'])
               .pipe(concat('app.js'))
               .pipe(gulp.dest('src/js'))
               .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve',function () {

    browserSync.init({
        server: {
            baseDir: 'src/'
        }
    });

    gulp.watch('src/scss/*.scss', ['styles']);
    gulp.watch('src/scripts/*.js', ['scripts']);
    gulp.watch(['src/**/*.html','src/img/*']).on('change', browserSync.reload);

});

gulp.task('copy', function () {
    return gulp.src(['src/**/*', 
                     '!src/scss/**/*', 
                     '!src/scss', 
                     '!src/scripts/**/*',
                     '!src/scripts'])
               .pipe(gulp.dest('dist'));
});
  
gulp.task('clean', function () {
    return gulp.src('dist')
            .pipe(clean());
});

gulp.task('htmlmin', function() {
    return gulp.src('src/*.html')
               .pipe(htmlmin({collapseWhitespace: true}))
               .pipe(gulp.dest('dist'));
});

gulp.task('img', function () {
    return gulp.src('dist/img/*')
               .pipe(imagemin([
                   imagemin.gifsicle(),
                   imagemin.jpegtran({progressive: true}),
                   imagemin.optipng({optimizationLevel: 5}),
                   imagemin.svgo()
               ]))
               .pipe(gulp.dest('dist/img'));
});

gulp.task('cssmin', function () {
    return gulp.src('dist/css/*.css')
               .pipe(cleanCSS({debug: true}, function(details) {
                   console.log(details.name + ': ' + details.stats.originalSize);
                   console.log(details.name + ': ' + details.stats.minifiedSize);
               }))
               .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['styles', 'scripts', 'serve']);

gulp.task('dist', function(){
    runSequence ('clean', ['styles', 'scripts'], 'copy', ['img','cssmin','htmlmin'])
});