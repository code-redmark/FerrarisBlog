import path from 'path';
import fs from 'fs';

/**
 * script completamente temporaneo per far funzionare il sito statico
 * e per caricare soprattutto la roba dell'evento del 28
 * 
 * Lo script prende i dati di tutti i post nella cartella post e li restituisce in 
 * una hash map. è necessaria in quanto il sito statico ha bisogno di avere tutto già in locale
 */

const pathCartella = path.join(process.cwd(), 'src/content/post')

// Leggi i nomi dei file nella cartella
const nomiPost = fs.readdirSync(pathCartella)
const MappaPost = {}

nomiPost.forEach(nome => {
    const file = fs.readFileSync(path.join(pathCartella, nome))
    const {metadati, contenuto} = matter(file)

    const slug = metadati.titolo
    .replace(/\s+/g, "-")
    .toLowerCase()

    MappaPost[metadati.id] = {
        ...metadati, 
        contenuto, 
        slug
    }

});

fs.writeFileSync(path.join(process.cwd(), 'src/content/posts.json', JSON.stringify(MappaPost, null, 2)))


