const { Router } = require("express");
const User = require("../models/user");
const router = Router();

router.get("/", (req, res) => {
  res.render("reg", {
    title: "Регистрация",
  });
});

router.post("/", async (req, res) => {
  const user = new User(
    req.body.first_name,
    req.body.second_name,
    req.body.password,
    req.body.email
  );

  await user.save();

  res.redirect("/");
});

module.exports = router;
