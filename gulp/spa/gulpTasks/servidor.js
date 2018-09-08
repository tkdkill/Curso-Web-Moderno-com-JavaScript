const gulp = require('gulp');
const watch = require('gulp-watch');
const webserver = require('gulp-webserver');

gulp.task('monitorarModancas', () => {
    watch('src/**/*.html', () => gulp.start('app.html'));
    watch('src/**/*.scss', () => gulp.start('app.scss'));
    watch('src/**/*.js', () => gulp.start('app.js'));
    watch('src/assets/imgs/**/*.*', () => gulp.start('app.imgs'));

});

gulp.task('servidor', ['monitorarModancas'], () => {
    return gulp.src('build').pipe(webserver({
        livereload: true,
        port: 8080,
        open: true 
    }));

});