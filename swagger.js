const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
        title: 'FABRICS Api',
        description: 'Fabrics Api'
    },
    host: 'localhost:3000',
    schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const endpointsFile = ['./routes/index.js'];

//This will generate swagger.json

swaggerAutogen(outputFile, endpointsFile, doc);