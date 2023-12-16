var express = require("express");
var router = express.Router();

const messages = [
   {
      text: "Hi there!",
      user: "Amando",
      added: new Date(),
   },
   {
      text: "Hello World!",
      user: "Charles",
      added: new Date(),
   },
];

/* GET home page. */
router.get("/", function (req, res, next) {
   res.render("index", { title: "Mini Message board", messages: messages });
});

router.get("/new", function (req, res, next) {
   res.render("new", { title: "Write A New Message" });
});

router.post("/new", function (req, res, next) {
   const username = req.body.username;
   const message = req.body.message;
   console.log(username, message);
   messages.push({ text: message, user: username, added: new Date() });
   res.redirect("/");
});

module.exports = router;
