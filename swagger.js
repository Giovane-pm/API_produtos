import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const selecao = {
    definition: {
    openapi: '3.0.0',
    info: {
        title: 'API de Produtos - DESAFIO_BACK_ASCII_GIOVANE-PEREIRA-MENDES',
        version: '1.0.0',
        description: 'API CRUD de produtos usando Express e MySQL.',
    },
    servers: [
        {
        url: 'http://localhost:4000',
        },
    ],
    },
  apis: ['./routes/*.js'], // caminho dos arquivos com suas rotas
}

const swaggerRequisitos = swaggerJSDoc(selecao);

export function estruturaSwagger(app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerRequisitos));
    console.log('Documentação Swagger disponível em http://localhost:4000/api-docs');
}