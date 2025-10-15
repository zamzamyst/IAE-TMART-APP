require("dotenv").config();
const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = require("./app");

const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.error("❌ Error: JWT_SECRET is not defined in .env file.");
  process.exit(1);
}

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "IAE TUGAS 1: Studi Kasus Kantin T-Mart",
      version: "1.0.0",
      description:
        "SwaggerUI ini disusun untuk mempermudah dokumentasi API pada Kantin T-Mart Gedung TULT, Telkom University yang mencakup proses untuk Login, Edit Profile (menggunakan JWT), dan Lihat Item/Menu (secara publik)",
    },
    servers: [{ url: `http://localhost:${PORT}` }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },

  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger Docs: http://localhost:${PORT}/api-docs`);
});
