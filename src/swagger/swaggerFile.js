import swaggerProcess from '../swagger/paths/swaggerProcess.json';

const endereco = process.env.APP_ADDESS || 'https://localhost:3333';

const swaggerFile = {
    openapi: '3.0.0',
    host: endereco,
    info: {
        title: 'CapJu - User',
        version: '0.0.1',
        description: 'Microserviço do capju responsável pela parte de operação com usuários',
        contact:{
            name: 'CAPJU - EPS/MDS',
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

export default swaggerFile;
