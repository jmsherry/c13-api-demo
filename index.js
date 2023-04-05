require('dotenv').config()
const server = require('./server');

const {
  PORT=3333,
  NODE_ENV='development'
} = process.env;

server.listen(PORT, () => {
  console.log(`Server listeing on  http://localhost:${PORT}`);
});
