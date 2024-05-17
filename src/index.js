const { app } = require('./app');
const http = require('http');
const { DatabaseConnect } = require('./database/connection')

const server = http.createServer(app);
const PORT = 8001;

DatabaseConnect();

server.listen(PORT, () => {
  console.log(`- App Enviroment:: ${PORT}`)
});