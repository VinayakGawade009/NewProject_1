import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.listen(PORT, () => {
  console.log("APP started");
  mongoose.connect(uri);
  console.log("DB connected");
});
