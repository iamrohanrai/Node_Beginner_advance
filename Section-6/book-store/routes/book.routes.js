const express = require("express");
const { customMiddleware } = require("../middleware/middleware.js");
const controller = require("../controllers/book.controller.js");
const router = express.Router();

router.get("/", customMiddleware, controller.getAllBooks);

router.get("/:id", customMiddleware, controller.getBookById);

router.post("/", controller.createBook);

router.delete("/:id", controller.deleteBook);

module.exports = router;
