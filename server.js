const express = require('express');
const cors = require('cors');
const app = express();
const client = require('./connection/index');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const port = 4000;

app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use('/', require('./routes'));

app.listen(process.env.port || port);
console.log("Web Server is listening at port " + (process.env.port || port));