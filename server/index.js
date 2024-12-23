// const express = require('express')
import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./database/db.js";
import userRoute from "./routes/user.route.js"
dotenv.config({});

// Call databse connection here
ConnectDB();
const app = express();

const PORT = process.env.PORT || 3000;

//apis
app.use("/api/v1/user",userRoute)

app.get("/home",(_,res)=>{
    res.status(200).json({
        success:true,
        message:"Hello i am coming from backend"
    })
})


app.listen(PORT,()=>{
    console.log(`server listen at port ${PORT}`)
})