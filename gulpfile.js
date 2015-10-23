var gulp = require('gulp');
var webserver = require('gulp-webserver');
var ghPages = require('gulp-gh-pages');

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

gulp.task('deploy', function() {
  return gulp.src('./slides/**/*')
    .pipe(ghPages());
});

gulp.task('serve', ['webserver','watch']);
