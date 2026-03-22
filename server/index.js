import dotenv from "dotenv"
dotenv.config()

import express from "express"
import mongoose from "mongoose"
import cors from 'cors'
import Class from './models/Classe.js'
import Post from "./models/Post.js"

import ClassRouter from "./routers/ClassRouter.js"
import PostRouter from "./routers/PostRouter.js"

const app = express()

app.use(express.json())
app.use(cors())
app.use("/posts", PostRouter)
app.use("/classes", ClassRouter)

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
    const postDiEsempio = [
    {
        title: "Incontro a Castel Capuano",
        description: "Il 28 marzo incontreremo la scrittrice Titti Marrone a Castel Capuano, per parlare del suo libro \\\"Primmammore\\\"",
        content: "Il 28 marzo incontreremo la scrittrice Titti Marrone a Castel Capuano, per parlare del suo libro \\\"Primmammore\\\". abbiamo letto il libro e ha preparato delle domande per l'autrice. sarà un incontro molto interessante",
        dataPost: "2026-03-04T09:00:00.000Z",
        slug: "incontro-castel-capuano-3M-2026-03-04T09:00:00.000Z",
        class: classi[0]._id,
    }
]
    await Post.deleteMany({});
    await Post.insertMany(postDiEsempio);
}

seed();

app.listen(5000)


