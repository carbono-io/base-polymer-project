'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

/**
 * Task for serving resources at development time.
 */
gulp.task('serve:src', function () {
    var bs = browserSync({
        server: {
            baseDir: 'src',
        },
        open: true,
    });
});

gulp.task('watch', function () {
    gulp.watch([
        'src/index.css',
        'src/index.html'
    ])
    .on('change', function () {
        browserSync.reload();
    });
});

/**
 * Development environment setup
 */
gulp.task('develop', ['serve:src', 'watch']);
