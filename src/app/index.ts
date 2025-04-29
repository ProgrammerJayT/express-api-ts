import express, { Request, Response } from "express";
import cors from "cors";
import notFound from "@/middleware/not-found";
import errorHandler from "@/middleware/error";
import homeRoute from "@/routes";

const app = express();

// domain access control
app.use(cors());

//
app.use(express.json());

// 
app.use("/", homeRoute);

// 404 handler
app.use(notFound);

// global error handler
app.use(errorHandler);


export default app;
