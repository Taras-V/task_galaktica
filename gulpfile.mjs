import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import * as sass from 'sass';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import fileInclude from 'gulp-file-include';
import browserSync from 'browser-sync';
import imagemin from 'gulp-imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import imageminOptipng from 'imagemin-optipng';
import imageminGifsicle from 'imagemin-gifsicle';
import imageminSvgo from 'imagemin-svgo';

const bs = browserSync.create();
const sassCompiler = gulpSass(sass);

function styles() {
  return gulp.src('src/scss/main.scss')
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'))
    .pipe(bs.stream());
}

function scripts() {
  return gulp.src([
    'src/js/main.js',
    'src/components/header/header.js',
    'src/components/animation-row/animation-row.js',
    'src/components/about/about.js',
  ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'))
    .pipe(bs.stream());
}

function html() {
  return gulp.src('src/components/**/*.html')
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('dist'))
    .pipe(bs.stream());
}

function media() {
  return gulp.src('src/media/**/*.{jpg,jpeg,png,gif,svg}')
    .pipe(imagemin([
      mozjpeg({ quality: 75, progressive: true }),
      imageminOptipng({ optimizationLevel: 5 }),
      imageminGifsicle({ interlaced: true }),
      imageminSvgo({
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'cleanupIDs', active: false }
        ]
      })
    ]))
    .pipe(gulp.dest('dist/media'))
    .pipe(bs.stream());
}

function serve() {
  bs.init({
    server: {
      baseDir: 'dist'
    }
  });

  gulp.watch('src/scss/**/*.scss', styles);
  gulp.watch('src/js/**/*.js', scripts);
  gulp.watch('src/components/**/*.html', html);
  gulp.watch('src/media/**/*.{jpg,jpeg,png,gif,svg}', media);
}

export const build = gulp.series(gulp.parallel(styles, scripts, html, media), serve);
export default build;

