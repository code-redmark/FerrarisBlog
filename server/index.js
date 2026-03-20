/**
 * Vengono importate queste 3 librerie, in javascript usiamo
 * require
 */
import express from "express"
import mongoose from "mongoose"
import cors from 'cors'
import Class from './Classe.js'

import dotenv from "dotenv"

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


// Roba di esempio per inserire dati nel db
const classiDiEsempio = [
    {anno: 3, sezione: "A", bio: "Siamo la classe 3A, siamo fortissimi!", posts: []},
    {anno: 4, sezione: "B", bio: "Siamo la classe 4B, siamo fortissimi!", posts: []},
    {anno: 5, sezione: "C", bio: "Siamo la classe 5C, siamo fortissimi!", posts: []},
    {anno: 3, sezione: "D", bio: "Siamo la classe 3D, siamo fortissimi!", posts: []},
];

async function seed() {
  await Class.deleteMany({}); // opzionale: cancella i vecchi dati
  await Class.insertMany(classiDiEsempio);
  console.log("Classi inserite!");
}

seed();

app.listen(5000)


