var gulp = require('gulp');
var webserver = require('gulp-webserver');
var ghPages = require('gulp-gh-pages');

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      host: '0.0.0.0',
      directoryListing: true,
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
