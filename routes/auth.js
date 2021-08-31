const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("auth", {
    title: "Вход",
    isAuth: true,
  });
});

module.exports = router;
