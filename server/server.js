import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";

import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";
const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => {
  res.send("API is working!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
