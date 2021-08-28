const { Router } = require("express");
const Course = require("../models/course");
const router = Router();

router.get("/", (req, res) => {
  res.render("add", {
    title: "Добавить курс",
    isAdd: true,
  });
});

//получаем данные с формы
router.post("/", async (req, res) => {
  const course = new Course(
    req.body.title,
    req.body.price,
    req.body.img,
    req.body.content,
    req.body.id
  );

  await course.save();
  res.redirect("/courses");
});

module.exports = router;
