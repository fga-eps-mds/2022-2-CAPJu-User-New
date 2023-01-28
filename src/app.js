import Database from "./database/index.js";
import express from "express";
import cors from "cors";
import routes from "./routes.js";
import swaggerUI from 'swagger-ui-express';
import swaggerFile from "./swagger/swaggerFile.js";




const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.use(
    '/docs',
    swaggerUI.serve,
    swaggerUI.setup(swaggerFile),
);

export default app;