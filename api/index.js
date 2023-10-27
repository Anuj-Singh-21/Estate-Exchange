import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRouter from "./Routes/user.route.js";

dotenv.config();

mongoose
  .connect(process.env.Mongo)
  .then(() => {
    console.log("Connected to MongoDB.");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is Running on Port 3000!");
});

app.use("/api/user", UserRouter);
