import "dotenv/config";
import express from "express";
import { connectMongoDB } from "./connection.js";
import userRouter from "./routes/user.routes.js";
import { authMiddleware } from "./middleware/user.middleware.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectMongoDB(process.env.MONGODB_URL)
  .then(() => {
    console.log(`✔️ MongoDB Connected`);
  })
  .catch(() => {
    console.log(`❌ MongoDB Connection Failed`);
  });
app.use(authMiddleware);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
