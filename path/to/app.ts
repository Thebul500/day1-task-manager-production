import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'Task Management API', version: '1.0.0' },
    // ... other definitions
  },
  // ... other configurations
};

const specs = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// ... other routes

export default app;
