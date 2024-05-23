const { app } = require('./app');
const http = require('http');
const  {Database}  = require('./database/connection')

const server = http.createServer(app);
const PORT = 8001;

Database.getInstance();

server.listen(PORT, () => {
  console.log(`- App Enviroment:: ${PORT}`)
});