const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const rigger = require("gulp-rigger");

//вызываю метод таск (при клике на задаине html должна выполниться функция)
gulp.task("html", () => {
  gulp.src("./src/*.html") //возьмет все файлы с расширением html
  .pipe(rigger()) //склеивает все
  .pipe(
      htmlmin ({collapseWhitespace: true})
  )
  .pipe(gulp.dest('./build/'))
});

