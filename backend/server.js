import express from "express";
import connectDB from "./configs/db.js";

import clerkWebhooks from "./controllers/clerkWebhooks.js";


import "dotenv/config";
import cors from "cors";
import {clerkMiddleware} from "@clerk/express"
connectDB();
const app = express();
app.use(cors());


//middleware
app.use(express.json())
app.use(clerkMiddleware())



app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => {
  res.send("API is Working fine");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
