import express from "express";
import cors from "cors";


const app= express();


app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({limit:"16kb"}));
app.use(express.static("public"));

app.use(cors({
    origin: process.env.ORIGIN,
    credentials:true,
    methods:["GET", "POST", "UPDATE", "PUT", "PATCH"],
    allowedHeaders:["Authorization", "Content-type"],
}))



import healthcheckroute from "./routes/healthcheck.routes.js";

app.use("/via/api/healthcheck/yes", healthcheckroute);

export default app;

