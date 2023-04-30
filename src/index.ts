import express from "express";
import swagger from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import swaggerDocument from "./swagger.json";

const app = express();

app.use("/api-docs", swagger.serve, swagger.setup(swaggerDocument));

app.use(express.json());

app.use("/users", usersRoutes);

export { app };
