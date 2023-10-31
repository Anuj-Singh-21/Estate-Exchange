import express from "express";
import { Signin, google, signup } from "../Controllers/auth.controller.js";

const Auth = express.Router();

Auth.post("/sign-up", signup);
Auth.post("/sign-in", Signin);
Auth.post("/google", google);

export default Auth;
