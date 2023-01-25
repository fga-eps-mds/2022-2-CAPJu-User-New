const swaggerProcess = require('../swagger/paths/swaggerUser.json');

const endereco = process.env.APP_ADDESS || 'https://localhost:3331';

const swaggerFile = {
    openapi: '3.0.0',
    host: endereco,
    info: {
        title: 'CapJu',
        version: '2.0.0',
        description: '',
        contact:{
            name: 'CAPJU - EPS/MDS',
            email: 'email@email.com',
        },
    },
    servers: [
        {
            url: endereco,
            description: 'Servidor de desenvolvimento',
        },
    ],
    paths: {
        ...swaggerProcess,
    }
};

module.exports = swaggerFile;
