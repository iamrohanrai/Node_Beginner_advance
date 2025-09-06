import express from "express";
import { signUp, login } from "../controller/user.controller.js";

const router = express.Router();

router.get("/"); // return current logged in user

router.post("/signup", signUp);

router.post("/login", login);

export default router;
