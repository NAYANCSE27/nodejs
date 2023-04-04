import express from 'express';

const port = 5000;

const app = express();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get('/test', (req, res) => {
  res.status(200).send('Hello World');
});
