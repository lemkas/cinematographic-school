const { Router } = require("express");
const Course = require("../models/course");
const router = Router();

router.get("/", async (req, res) => {
  const courses = await Course.getALL();
  res.render("courses", {
    title: "Курсы",
    isCourses: true,
    courses,
  });
});

router.get("/:id", (req, res) => {
  res.render("course");
});

module.exports = router;
