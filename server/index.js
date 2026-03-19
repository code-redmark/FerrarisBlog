/**
 * Vengono importate queste 3 librerie, in javascript usiamo
 * require
 */
import express from "express"
import mongoose from "mongoose"
import cors from 'cors'
import Class from './Classe.js'

const app = express() // Crea l'app express
/**
 * app.use abilità delle funzionalità dell'applicazione
 * con express.json abilitiamo la ricezione di file json dal frontend,
 * mentre cors sta per Cross Origin Resource Sharing, e serve a regolare
 * e gestire lo scambio di risorse da più origini, di base il nostro server
 * accetterebbe richieste solo dallo stesso dominio (code-redmark.github.io),
 * con cors abilitiamo tutte le richieste da qualunque indirizzo
 */
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://marcofallace_db_user:Rt7I0adGIJZClN3f@blogdb.hkr7xpk.mongodb.net/?appName=blogDB")
    .then(() => console.log("MongoDB connesso"))
    .catch(err => console.log(err));


/**
 * Qui iniziamo a determinare il comportamento del database, ci sono due "azioni"
 * principali che il db fa, GET e POST, GET deriva da una richiesta esterna di avere
 * dei dati che il server, come già abbiamo detto, li manda al client, che li può caricare
 * POST invece è l'inverso, viene modificata una collezione con l'aggiunta, la rimozione o la
 * modifica di una collezione o documento all'interno di essa, POST comporta anche una ricezione
 * di dati dal client, che quindi vengono aggiunti al db
 */
app.get("/classes/:id", async (req, res) => {

    const oggettoClasse = await Class.findById(req.params.id)
    res.json(oggettoClasse)
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


