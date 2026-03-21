/**
 * Vengono importate queste 3 librerie, in javascript usiamo
 * require
 */
import express from "express"
import mongoose from "mongoose"
import cors from 'cors'
import Class from './schemas/Classe.js'
import { PostModel } from "./schemas/Post.js"

import dotenv from "dotenv"
import { data } from "react-router-dom"
dotenv.config()

const app = express() // Crea l'app express

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DB_URI)
    .then(() => console.log("MongoDB connesso"))
    .catch(err => console.log(err));


app.get("/classes", async (req, res) => {
    const classi = await Class.find();
    res.json(classi)
})

app.get("/classes/:id", async (req, res) => {
    const id = req.params.id
    try {
        const classe = await Class.findById(id);
        if (!classe) {
            return res.status(404).json({ errore: "Classe non trovata" });
        }
        res.json(classe);
    } catch (err) {
        res.status(500).json({ errore: "Errore server" });
    }
});

app.get("/classes/:id/posts", async (req, res) => {
    const id = req.params.id
    try {
        const posts = await PostModel.find({ class: id });
        res.json(posts);
    } catch (err) {
        res.status(500).json({ errore: "Errore server" });
    }
});

app.get("/posts", async (req, res) => {
    const posts = await PostModel.find();
    res.json(posts)
})
app.get("/posts/pop", async (req, res) => {
    const posts = await PostModel.find().populate('class');
    res.json(posts)
})

app.get("/posts/id/:id", async (req, res) => {
    const id = req.params.id
    try {
        const post = await PostModel.findById(id);
        if (!post) {
            return res.status(404).json({ errore: "Post non trovato" });
        }
        res.json(post);
    } catch (err) {
        res.status(500).json({ errore: "Errore server" });
    }
});

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

    await PostModel.deleteMany({});
    await PostModel.insertMany(postDiEsempio);
}

seed();

app.listen(5000)


