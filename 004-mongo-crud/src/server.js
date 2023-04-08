import express from "express";
import mongoose from "mongoose";

import config from "./config.js";
import { configureRouter } from "./router.js";

async function connectMongoDB() {
    try{
        await mongoose.connect(config.mongodb.url);
        console.log("Connected to MongoDB");
    }catch(error){
        console.log("Error connecting to MongoDB", error);
    }
}

function initializeServer() {
  const app = express();

  app.listen(config.PORT, () => {
    console.log(`Server listening on port ${config.PORT}`);
  });

  connectMongoDB();
  configureRouter(app);
}

initializeServer();