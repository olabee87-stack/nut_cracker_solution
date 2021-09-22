import express from "express";
import dotenv from "dotenv";
dotenv.config();
import nutCrackerRoutes from "./src/routes/nut-cracker.js";

const PORT = process.env.PORT;

// @Init Express
const app = express();

// @Init Middleware - to parse the body
app.use(express.json({ extended: false }));

// @Routes
app.use("/api", nutCrackerRoutes);

// @Listening port - Server
const start = () => {
  app.listen(PORT, () =>
    console.log(`**********Server started on ${PORT}**********`)
  );
};

start();
