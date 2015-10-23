var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('slides')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('watch', function() {
  gulp.src('resources/*.css'),
  gulp.src('resources/fonts/*')
})

gulp.task('default', ['webserver','watch']);
