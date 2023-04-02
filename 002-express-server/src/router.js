const { Router } = require("express");
const Controller = require("./controller");

const router = Router();

router.get("/me", Controller.getUser);

function configureRoutes(server) {
  server.use("/api", router);
}

module.exports = { configureRoutes };