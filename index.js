const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

//настройка хбрс
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
});

// регистриуем движок и начинаем использовать
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
// указываем где будут находиться шаблоны
app.set("views", "views");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Главная страница",
    isHome: true,
  });
});

app.get("/courses", (req, res) => {
  res.render("courses", {
    title: "Курсы",
    isCourses: true,
  });
});

app.get("/add", (req, res) => {
  res.render("courses", {
    title: "Добавить курс",
    isAdd: true,
  });
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server was started on port ${PORT}`);
});
