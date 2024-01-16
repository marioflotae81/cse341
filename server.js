const express = require('express');
const app = express();
const client = require('./connection/index');

const port = 4000;

app.use('/', require('./routes'));

app.listen(process.env.port || port);
console.log("Web Server is listening at port " + (process.env.port || port));