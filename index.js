const express = require("express");
const path = require("path");
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

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/courses", (req, res) => {
  res.render("courses");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server was started on port ${PORT}`);
});
