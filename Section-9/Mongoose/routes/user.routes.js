import express from "express";
import { User } from "../models/user.model.js";
import { randomBytes, createHmac } from "crypto";
import jwt from "jsonwebtoken";
import { ensureAuthenticated } from "../middleware/user.middleware.js";

const router = express.Router();

router.patch("/", async (req, res) => {
  const { name } = req.body;
  await User.findByIdAndUpdate(req.user._id, {
    name,
  });
  return res.json({ status: "Sucess" });
});

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({
    email,
  });
  if (existingUser) {
    return res.status(400).json({ error: `User with ${email} already exists` });
  }

  const salt = randomBytes(256).toString("hex");
  const hashedPassword = createHmac("sha256", salt)
    .update(password)
    .digest("hex");

  const user = await User.insertOne({
    name,
    email,
    password: hashedPassword,
    salt,
  });

  return res.status(201).json({ status: "success", data: { id: user._id } });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({
    email,
  });

  if (!existingUser) {
    return res.status(400).json({
      error: `User Does Not Exist`,
    });
  }

  const salt = existingUser.salt;
  const hashed = existingUser.password;

  const newHash = createHmac("sha256", salt).update(password).digest("hex");

  if (hashed !== newHash) {
    return res.status(400).json({ error: "Invalid Password" });
  }

  const payload = {
    name: existingUser.name,
    _id: existingUser._id,
    email: existingUser.email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET);

  return res.json({ status: "Success", token });
});

export default router;
