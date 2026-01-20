import express from "express";
import healthcheckroute from "./routes/healthcheck.routes.js";

const app= express();



app.use("/via/api/healthcheck/yes", healthcheckroute);

export default app;

