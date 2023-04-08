import { Router } from "express";
import { ProductConroller } from "./controllers/index.js";

const router = Router();

router.post('/products', ProductConroller.createProduct);

export function configureRouter(app) {
  app.use('api/', router);
}
