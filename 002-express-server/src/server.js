const express = require("express");
const router = require('./router');

const port = 5000;

const server = express();

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

server.use('/api', router);
