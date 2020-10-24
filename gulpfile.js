var gulp = require('gulp'),
  svgSprite = require('gulp-svg-sprite'),
  babel = require('gulp-babel'),
  concat = require('gulp-concat');

function generateSVGMap(cb) {
  const config = {
    mode: {
      symbol: {
        inline: true,
        dest: '.',
        sprite: 'icons-sprite.svg'
      }
    },
    svg: {
      namespaceClassnames: false
    }
  };

  gulp
    .src('**/*.svg', { cwd: 'assets/images/sprite-icon-source' })
    .pipe(svgSprite(config))
    .pipe(gulp.dest('_includes'));
  cb();
}

function buildScripts(cb) {
  gulp
    .src(['assets/js/promise-polyfill.min.js', 'assets/js/fetch.umd.js'])
    .pipe(concat('polyfills.js'))
    .pipe(gulp.dest('assets/js'));

  gulp
    .src('assets/js/script.js')
    .pipe(
      babel({
        presets: ['@babel/env']
      })
    )
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('assets/js'));

  cb();
}

exports.default = gulp.parallel(generateSVGMap/*, buildScripts*/);
