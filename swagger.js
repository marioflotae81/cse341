const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'Personal Assignment Weeks 1-4'
    },
    host: 'localhost:4000',
    schemes: ['http']
};

const outputFile = './swagger.json';
const endPointsFile = ['./routes/index.js'];

swaggerAutogen(outputFile, endPointsFile, doc);