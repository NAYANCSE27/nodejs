const express = require("express");
const port = 5000;

const server = express();

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

server.get("/hello", (req, res) => {
  res.send("Hello World");
});

server.get("/hola", (req, res) => {
  res.send("Hola Mundo");
});

server.get("/me", (req, res) => {
  res.status(200).json({ name: "John Doe", age: 30, location: "New York" });
});
