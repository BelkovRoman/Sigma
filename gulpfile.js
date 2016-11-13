var gulp = require('gulp');
	cssnano = require('gulp-cssnano'),
	htmlmin = require('gulp-htmlmin');

gulp.task('default', ['mincss','minhtml']);

gulp.task('mincss', function(){
	
    return gulp.src('dev/css/style.css')
               .pipe(cssnano())
               .pipe(gulp.dest('release/css'));
		
});
 
gulp.task('minhtml', function(){
	
	return gulp.src('dev/index.html')
			   .pipe(htmlmin({collapseWhitespace: true}))
			   .pipe(gulp.dest('release'));
			 
});