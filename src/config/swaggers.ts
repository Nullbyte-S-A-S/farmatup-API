import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import type { Express } from "express";

const swaggerServerUrl =
  process.env.NODE_ENV === "production"
    ? "https://farmatup-api.onrender.com"
    : "http://localhost:3000";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "Documentación de la API con Swagger para el frontend",
    },
    servers: [
      {
        url: swaggerServerUrl,
      },
    ],
  },
  apis: ["./src/**/*.ts"], // Aquí se leerán los comentarios JSDoc
};

export const swaggerSpec = swaggerJsdoc(options);

export const swaggerDocs = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`📄 Swagger docs disponibles en ${swaggerServerUrl}/api-docs`);
};
