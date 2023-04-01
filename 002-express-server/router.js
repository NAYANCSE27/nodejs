const { Router } = require("express");

const router = Router();

router.get("/hello", (req, res) => {
  res.send("Hello World");
});

router.get("/hola", (req, res) => {
  res.send("Hola Mundo");
});

router.get("/me", (req, res) => {
  res.status(200).json({ name: "John Doe", age: 30, location: "New York" });
});

module.exports = router;