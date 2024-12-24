// const express = require('express')
import express from "express";
import dotenv from "dotenv";
import ConnectDB from "./database/db.js";
import userRoute from "./routes/user.route.js"
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config({});

// Call databse connection here
ConnectDB();
const app = express();

const PORT = process.env.PORT || 3000;

//Default MiddleWare
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5174",
    credentials:true
}))
//apis
app.use("/api/v1/user",userRoute)
//"http://localhost:8080/api/v1/user/Register" our api
// app.get("/home",(_,res)=>{
//     res.status(200).json({
//         success:true,
//         message:"Hello i am coming from backend"
//     })
// })


app.listen(PORT,()=>{
    console.log(`server listen at port ${PORT}`)
})