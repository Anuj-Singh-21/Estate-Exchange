import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRouter from "./Routes/user.route.js";
import AuthRouter from "./Routes/auth.route.js";

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
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is Running on Port 3000!");
});

app.use("/api/user", UserRouter);
app.use("/api/auth", AuthRouter);
