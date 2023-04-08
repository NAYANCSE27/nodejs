const { Router } = require("express");

const { createProduct } = require("./controllers/productController");

const router = Router();

router.post("/products",createProduct);

module.exports = { router, };
