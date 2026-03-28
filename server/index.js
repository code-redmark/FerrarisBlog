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
import AuthRouter from './routers/AuthRouter.js'

const app = express()
const appRouter = express.Router()

appRouter.use("/auth", AuthRouter)
appRouter.use("/posts", PostRouter)
appRouter.use("/tecas", TecaRouter)
appRouter.use("/classes", ClassRouter)

app.use(express.json())
app.use(cors({
    origin: process.env.VITE_FRONTEND,
    credentials: true
}))
app.use("/api", appRouter)

mongoose.connect(process.env.DB_URI)
    .then(() => console.log("MongoDB connesso"))
    .catch(err => console.log(err));


// Roba di esempio per inserire dati nel db
const classiDiEsempio = [
    {anno: 3, sezione: "M", bio: "whatsapp chicken!"},
    {anno: 3, sezione: "A", bio: ""},
    {anno: 4, sezione: "B", bio: "Siamo la classe 4B, siamo fortissimi!"},
    {anno: 5, sezione: "C", bio: "Siamo la classe 5C, siamo fortissimi!"}
]


async function seed() {
    await Class.deleteMany({}); // opzionale: cancella i vecchi dati
    let classi = await Class.insertMany(classiDiEsempio);

    await Post.deleteMany({});
    await Teca.deleteMany({})
    
    const testTeca = {
        title: "Incontro a Castel Capuano",
        description: "Il 28 marzo incontreremo la scrittrice Titti Marrone a Castel Capuano, per parlare del suo libro \\\"Primmammore\\\"",
        slug: "incontro-castel-capuano-3M-2026-03-04T09:00:00.000Z",
        class: classi[0]._id,
    }

    const insertedParent = await Teca.insertOne(testTeca)

    const postDiEsempio = [
        {
            title: "Le nostre riflessioni",
            description: "I pensieri e le riflessioni che abbiamo fatto leggendo Primmammore",
            content: "Riflessioni...",
            dataPost: "2026-03-09T09:00:00.000Z",
            slug: "le-nostre-riflessioni-3M-2026-03-09T09:00:00.000Z",
            class: classi[0]._id,
            parentTeca: insertedParent._id
        },
        {
            title: "Il Backstage",
            description: "Mauro Romano ha raccolto diversi momenti durante la produzione di FerrarisBlog e durante il lavoro che abbiamo preparato per l'incontro",
            content: "Sopra sono riportati tutti i video ed il footage di Mauro",
            dataPost: "2026-03-20T09:00:00.000Z",
            slug: "il-backstage-3M-2026-03-20T09:00:00.000Z",
            class: classi[0]._id,
            parentTeca: insertedParent._id
        }
]
    
    await Post.insertMany(postDiEsempio);
}

seed();

app.listen(5000)


