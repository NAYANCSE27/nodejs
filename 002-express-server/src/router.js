const { Router } = require("express");
const Controller = require("./controller");

const router = Router();

router.get("/me", Controller.getUser);

router.get("/me/:id", Controller.getUserById);

module.exports = router;