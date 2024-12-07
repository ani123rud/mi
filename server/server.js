

// const mongoose=require('mongoose');
// const express=require('express');
// const cookieParser=require('cookie-parser');
// const cors=require('cors');


// mongoose.connect('mongodb+srv://anirudhkulkarni2382004:6MTUjQ4ceC6kR7Io@cluster0.i3arv.mongodb.net/')
// .then(()=> console.log("db connected"))
// .catch((error)=>console.log(error));
// const app =express();
// const PORT=process.env.PORT || 5000;

// app.use(
//     cors({
//         origin:'  http://localhost:5173/',
//         methods:['GET','POST','DELETE','PUT'],
//         allowedHeaders:[
//             'Content-Type',
//             'Authorization',
//             'Cache-Control',
//             'Expires',
//             'Pragma'

//         ],
//        credentials:true   
            
//     })
// );

// app.use(cookieParser());
// app.use(express.json());

// app.listen(PORT,()=> console.log("server is runinng"));

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";
import adminProductsRouter from "./routes/admin/product-route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const __dirname = path.resolve();

app.use(
	cors({
	  origin: "http://localhost:5173",
	  methods: ["GET", "POST", "DELETE", "PUT"],
	  allowedHeaders: [
		"Content-Type",
		"Authorization",
		"Cache-Control",
		"Expires",
		"Pragma",
	  ],
	  credentials: true,
	})
  );

app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse incoming cookies

app.use("/api/auth", authRoutes);
app.use("/api/admin/products", adminProductsRouter);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
	connectDB();
	console.log("Server is running on port: ", PORT);
});



