/* eslint-disable prettier/prettier */
const gulp = require('gulp'),
  sass = require('gulp-sass')(require('node-sass')),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps');
let bases = {
  src: '.',
  buildCss: './styles/css',
  srcReact: './react/components',
  srcCheckout: './checkout-ui-settings'
},
  paths = {
    sass: bases.src + '/styles/sass/*.scss',
    sassReact: bases.srcReact + '/**/**.scss',
    sassCheckout: bases.srcCheckout + '/checkout-ui-custom/sass/*.scss',
  }
gulp.task('sass', () => {
  return gulp
    .src([paths.sass], { allowEmpty: true })
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({cascade: false, overrideBrowserslist:['last  2 versions']}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest([bases.buildCss]))
})
gulp.task('sassReact', () => {
  return gulp
    .src([paths.sassReact], {
      allowEmpty: true,
    })
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({cascade: false, overrideBrowserslist:['last  2 versions']}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(function (file) {
      return file.base;
    }));
})
gulp.task('sassCheckout', () => {
  return gulp
    .src([paths.sassCheckout], {
      allowEmpty: true,
    })
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({cascade: false, overrideBrowserslist:['last  2 versions']}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(function (file) {
      return file.base;
    }));
})
gulp.task('watch', () => {
  gulp.watch(
    [
      paths.sass,
      paths.sassReact,
      paths.sassCheckout,
    ],
    gulp.series(
      'sass',
      'sassReact',
      'sassCheckout',
    )
  )
})
gulp.task(
  'dev',
  gulp.series(
    'sass',
    'sassReact',
    'sassCheckout',
    gulp.parallel('watch'),
    function () {
      setEnv('dev')
    }
  )
)