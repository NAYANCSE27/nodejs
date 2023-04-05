import { Router } from "express";

const router = Router();

router.get('/test', (req, res) => {
    res.status(200).send('Hello World!');
});

router.get('/me', (req, res) => {
    res.status(200).send('Hello Nayan');
});

export { router };