const express = require("express");
const controller = require("../controllers/author.controller.js");

const router = express.Router();

router.get("/", controller.getAllAuthor);

router.get("/:id", controller.getAuthorById);

router.post("/", controller.createAuthor);

module.exports = router;
