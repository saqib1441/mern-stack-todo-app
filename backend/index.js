import express from "express";
import dotenv from "dotenv";
import router from "./src/routes/routes.js";
import cors from "cors";
import "./src/db/db.js";

// Dotenv configuration
dotenv.config();

// Rest Object
const app = express();

// Middlewares configuration
app.use(cors());
app.use(express.json());

// Routes configuration
app.use("/api/v1/", router);

// Rest API
app.get("/", (req, res) => {
  res.send({
    success: true,
    message: "The server is running",
  });
});

// PORT
const PORT = process.env.PORT;

// Server Listening
app.listen(PORT, () => {
  console.log(
    `The Server is Running in ${process.env.NODE_ENV} Mode at Port ${PORT}`
  );
});
