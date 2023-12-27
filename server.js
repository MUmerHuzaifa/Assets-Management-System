const http = require('http');
const { env } = require('process');
const debug = require("debug")("node-angular")
const Port = process.env.Port || 3000;
const app =  require('./Backend/app')
app.set('port',Port);
const server = http.createServer(app)

server.listen(Port)