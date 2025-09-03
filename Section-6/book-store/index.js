const express = require("express");
const bookRouter = require("./routes/book.routes.js");
const { loggerMiddleware } = require("./middleware/middleware.js");

const app = express();
const PORT = 8000;

// Middlewares (plugins)
app.use(express.json());

app.use(loggerMiddleware);

// Routes
app.use("/books", bookRouter);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
