const { Router } = require("express");
const User = require("../models/user");
const router = Router();

router.get("/", (req, res) => {
  res.render("auth", {
    title: "Вход",
    isAuth: true,
  });
});

router.post("/", async (req, res) => {
  const user = await User.authFunction(req.body.email, req.body.password);
  if (user) {
    res.redirect("/home");
  } else {
    console.log("Вы неверно ввели логин или пароль");
    res.redirect("/");
  }
});

module.exports = router;
