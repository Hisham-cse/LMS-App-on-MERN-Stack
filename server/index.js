// const express = require('express')
import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./database/db.js";

dotenv.config({});

// Call databse connection here
ConnectDB();
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`server listen at port ${PORT}`)
})