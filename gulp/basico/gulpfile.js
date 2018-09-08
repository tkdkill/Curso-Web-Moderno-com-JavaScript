const gulp = require('gulp');

gulp.task('default', () => {
    // console.log('OK');
    return gulp.start('copiar', 'fim');

});

gulp.task('copiar', ['antes1', 'antes2'], () => {
    //console.log('copiar...');

    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    // ou
    // caso tenha pasta seria --> gulp.src('pastaA/**/*.txt')
    gulp.src('pastaA/**/*.txt')
        // .pipe(transformacao1)
        // .pipe(transformacao2)
        .pipe(gulp.dest('pastaB'));
    
});

gulp.task('antes1', () => {
    console.log('Antes 1...');

});

gulp.task('antes2', () => {
    console.log('Antes 2...');
    
});

gulp.task('fim', ['fim1', 'fim2']);

gulp.task('fim1', () => {
    console.log('Fim 1!!!');
    
});

gulp.task('fim2', () => {
    console.log('Fim 2!!!');

});
