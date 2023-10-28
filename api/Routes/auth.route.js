import express from "express";
import { Signin, signup } from "../Controllers/auth.controller.js";

const Auth = express.Router();

Auth.post("/sign-up", signup);
Auth.post("/sign-in", Signin);

export default Auth;

