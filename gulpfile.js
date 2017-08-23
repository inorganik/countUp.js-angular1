var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');

gulp.task('clean', function(cb) {
	del(['dist/*']);
	return cb();
});

gulp.task('build', ['clean'], function(file) {
	var angularCountup = gulp
		.src('angular-countUp.js')
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('default', ['build']);
