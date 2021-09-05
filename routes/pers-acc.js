const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("pers-acc", {
    title: "Личный кабинет",
    isAcc: true,
  });
});

module.exports = router;
