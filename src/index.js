import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";
import express from "express";

import connectDB from "./db/index.js";

import dotenv from 'dotenv';
dotenv.config();
connectDB()

// const app = express()

// ;(async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGOBD_URL}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("Error:",error)
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`app listing on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.log("Error:",error)
//         throw error
//     }

// })()
