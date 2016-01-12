// loads various gulp modules
var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var uncss = require('gulp-uncss');
var uglify = require('gulp-uglify');

// css optimisation
gulp.task('css', function(){
  gulp.src('css/**/*.css')
    .pipe(concat('style.css'))
    .pipe(minifyCSS())
    .pipe(uncss({
        html: ['en/index.html']
    }))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('css'))
});

// js optimisation
gulp.task('js', function(){
  return gulp.src([
      '!js/jquery-ui.min.js',
      '!js/jquery.min.js',
      'js/lang.js',
      'js/scripts.js',
      'js/welcomesystem.js',
      'js/guidedtoursystem.js',
      'js/filesystem.js',
      'js/folders.js',
      'js/systemoverlay.js',
      'js/systemmenu.js',
      'js/internetsystem.js',
      'js/emailsystem.js',
      'js/systemsettings.js',
      'js/email.js',
      'js/errormessage.js',
      'js/ubuntuonesystem.js',
      'js/file.js',
      'js/shotwellsystem.js',
      'js/shutdownSystem.js',
      'js/movieplayersystem.js',
      'js/libresystem.js',
      'js/softwaresystem.js',
      'js/notificationsystem.js',
      'js/analytics.js'
    ])
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('default', ['css', 'js']);