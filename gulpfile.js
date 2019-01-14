var gulp = require('gulp');
var sass = require('gulp-sass'); 
var notify = require('gulp-notify');

/*-----------------------------------------------------------------------------------*/
/*  styles
/*-----------------------------------------------------------------------------------*/

var styleDest = 'css';
var styleSrc = 'scss/main.scss';

gulp.task('styles', function() {
  return gulp.src( styleSrc )
    .pipe( sass( {
        errLogToConsole: true,
        style: 'expanded',
        precision: 10
    } ) )

    .pipe( gulp.dest( styleDest ) )
    .pipe(gulp.dest(styleDest))
    .pipe( notify( { message: 'TASK: "styles" Completed!', onLast: true } ) )
});