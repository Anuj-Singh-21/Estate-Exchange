import express from "express";
import { signup } from "../Controllers/auth.controller.js";

const Auth = express.Router();

Auth.post("/sign-up", signup);

export default Auth;

