import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import bodyParser from "body-parser"; // <-- add this

const app = express();
app.use(cors());

connectDB();

// Use raw body parser ONLY for /api/clerk
app.use("/api/clerk", bodyParser.raw({ type: "*/*" }), clerkWebhooks);

// Use JSON parser for all other routes
app.use(express.json());

// Apply clerkMiddleware AFTER webhook route
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("API is working!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});