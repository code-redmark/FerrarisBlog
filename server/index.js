import dotenv from "dotenv"
dotenv.config()

import express from "express"
import mongoose from "mongoose"
import cors from 'cors'

import Class from './models/Classe.js'
import Teca from "./models/Teca.js"
import Post from "./models/Post.js"

import ClassRouter from "./routers/ClassRouter.js"
import TecaRouter from "./routers/TecaRouter.js"
import PostRouter from "./routers/PostRouter.js"

import seed from "./seed.js"

const app = express()
const appRouter = express.Router()

appRouter.use("/posts", PostRouter)
appRouter.use("/tecas", TecaRouter)
appRouter.use("/classes", ClassRouter)

app.use(express.json())
app.use(cors({
    origin: true,
    credentials: true
}))
app.use("/api", appRouter)

mongoose.connect(process.env.DB_URI)
    .then(() => console.log("MongoDB connesso"))
    .catch(err => console.log(err));

seed();

app.listen(5000, '0.0.0.0', () => { console.log("Server avviato") })


