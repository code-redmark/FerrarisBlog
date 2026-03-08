/**
 * script completamente temporaneo per far funzionare il sito statico
 * e per caricare soprattutto la roba dell'evento del 28
 * 
 * Lo script prende i dati di tutti i post nella cartella post e li restituisce in 
 * una hash map. è necessaria in quanto il sito statico ha bisogno di avere tutto già in locale
 */

import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';



/**
 * Trova tutti i Markdown all'interno di una cartella
 * recursivamente
 */
function trovaMarkdown(pathCartella) {
    let listaMarkdown = [] // è teoricamente ovvio ma per ricordarmi [] --> array ; {} --> dizionario

    const contenuto = fs.readdirSync(pathCartella, { withFileTypes: true  }) //withFileTypes ci dice se è un file o una cartella
    contenuto.forEach(oggetto => {
        const pathOggetto = path.join(pathCartella, oggetto.name);
        if (oggetto.isDirectory()) {
            listaMarkdown = listaMarkdown.concat(trovaMarkdown(pathOggetto)) // concat unisce 2 array
        } else if (oggetto.isFile() && oggetto.name.endsWith('.md')) {
            listaMarkdown.push(pathOggetto)
        }
    })
    return listaMarkdown
}

const pathPost = path.join(process.cwd(), 'src/post/file')
const listaPost = trovaMarkdown(pathPost)

const MappaPost = {}

listaPost.forEach(post => {
    const file = fs.readFileSync(post, 'utf8')
    const { data, content } = matter(file)

    const slug = data.title.replace(/\s+/g, "-").toLowerCase()

    MappaPost[data.id] = {
        ...data,
        content,
        slug
    }
});

fs.writeFileSync(path.join(process.cwd(), 'src/post/posts.json'), JSON.stringify(MappaPost, null, 2))


