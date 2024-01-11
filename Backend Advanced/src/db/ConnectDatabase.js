import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

import express from "express";
const app = express();

const ConnectDB = async () => {
  try {
    await mongoose
      .connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      .then(() => {
        console.log("MONGO DB CONNECTED !!!");
      })
      .catch((err) => {
        console.log("MONGO CONNECTION FAILED !!! ", err);
      });
    app.on("error", () => {
      console.log("ERROR", error);
      throw error;
    });
  } catch (error) {
    console.error("ERROR : ", error);
    process.exit(1);
  }
};

export default ConnectDB;
