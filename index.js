const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const homeRoutes = require("./routes/home");
const coursesRoutes = require("./routes/courses");
const addRoutes = require("./routes/add");
const authRoutes = require("./routes/auth");
const regRoutes = require("./routes/reg");

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

// распознаем, что приходит с пост запроса
app.use(express.urlencoded({ extended: true }));

app.use("/", authRoutes);
app.use("/reg", regRoutes);
app.use("/home", homeRoutes);
app.use("/courses", coursesRoutes);
app.use("/add", addRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server was started on port ${PORT}`);
});
