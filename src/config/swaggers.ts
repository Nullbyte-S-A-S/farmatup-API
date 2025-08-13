import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import type { Express } from "express";

export const swaggerDocs = (app: Express, port: number) => {
  const swaggerServerUrl =
    process.env.NODE_ENV === "production"
      ? "https://farmatup-api.onrender.com"
      : `http://localhost:${port}`;

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
    apis: ["./src/**/*.ts"], // Lee todos los comentarios JSDoc de tus rutas
  };

  const swaggerSpec = swaggerJsdoc(options);

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`📄 Swagger docs disponibles en ${swaggerServerUrl}/api-docs`);
};
