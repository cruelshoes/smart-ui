const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const apiRoutes = require('./dist/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/dashboard', express.static(path.join(__dirname, './dist/app')));
//app.use(logRequest);

app.set('port', 8080);

apiRoutes.run(app);

const server = http.createServer(app);
server.listen(app.get('port'));
server.on('listening', () => console.log('Http server listening on port', app.get('port')));

module.exports = app;