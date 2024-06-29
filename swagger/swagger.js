const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const userPaths = require('./paths/user');
const incomePaths = require('./paths/income');
const expensePaths = require('./paths/expense');
const budgetPaths = require('./paths/budget');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Cashflow App API',
      version: '1.0.0',
      description: 'API documentation for the Cashflow App',
    },
    // servers: [
    //   {
    //     // url: 'http://localhost:3000', // dev loval
    //     url: 'https://apimycf.zethansa.com/api-docs', // dev server
    //   },
    // ],
    paths: {
      ...userPaths,
      ...incomePaths,
      ...expensePaths,
      ...budgetPaths,
    },
  },
  apis: [], // No need to specify API files here since we're manually defining them
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
