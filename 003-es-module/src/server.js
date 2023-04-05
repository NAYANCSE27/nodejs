import express from 'express';
import { router } from './router.js';

const port = 5000;

const app = express();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.use('', router);
