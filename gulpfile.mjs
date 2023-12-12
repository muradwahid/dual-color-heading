import { deleteAsync } from 'del';
import gulp from 'gulp';
import zip from 'gulp-zip';


gulp.task('clean', async() => {
  return deleteAsync(['languages', 'bundled']);
});

export function bundle()  {   return gulp
  .src([
    '**/*',
    '!bundled/**',
    '!node_modules/**',
    '!src/**',
    '!.eslintrc.js',
    '!.gitignore',
    '!gulpfile.js',
    '!package.json',
    '!package-lock.json',
    '!readme.md',
    '!todo.txt',
    '!webpack.config.js',
  ])
  .pipe(zip('dual-color-heading.zip'))
  .pipe(gulp.dest('bundled'));   }
