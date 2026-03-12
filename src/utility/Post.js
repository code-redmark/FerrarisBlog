/**
 * script completamente temporaneo per far funzionare il sito statico
 * e per caricare soprattutto la roba dell'evento del 28
 * 
 * Lo script prende i dati di tutti i post nella cartella post e li restituisce in 
 * una hash map. è necessaria in quanto il sito statico ha bisogno di avere tutto già in locale
 */

import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'


/**
 * Restituisce i path di tutti i Markdown all'interno della cartella
 * post/file, dividendoli per classe
 */
function trovaMarkdown(pathCartelle) {

    let listaMarkdown = {}
    const nomiClassi = fs.readdirSync(pathCartelle)

    nomiClassi.forEach(nomeClasse => {

        const pathClasse = path.join(pathCartelle, nomeClasse)
        const entryFiles = fs.readdirSync(pathClasse, { withFileTypes: true })

        let postClasse = []

        entryFiles.forEach(file => {
            if (!file.isFile() || !file.name.endsWith(".md")) return

            const pathFile = path.join(pathClasse, file.name)
            postClasse.push(pathFile)
        })

        listaMarkdown[nomeClasse] = postClasse
    })

    return listaMarkdown
}


const pathCartelleClassi = path.join(process.cwd(), 'src/post/file')
const listaPost = trovaMarkdown(pathCartelleClassi)

let Mappa = {}


/**
 * Costruzione della mappa finale
 */
for (let classe in listaPost) {

    console.log(classe)
    

    let dictClasse = {}
    const posts = listaPost[classe]

    for (let pathPost of posts) {

        const file = fs.readFileSync(pathPost, 'utf-8')
        const parsed = matter(file)

        const data = parsed.data
        const content = parsed.content

        const slug = data.title.toLowerCase().replace(/\s+/g, "-")

        console.log(data.date)

        let dictPost = {
            id: data.id,
            title: data.title,
            slug: slug,
            content: content,
            description: data.description,
            dataPost: data.date
        }

        dictClasse[data.id] = dictPost
    }

    Mappa[classe] = dictClasse
}



fs.writeFileSync(
    path.join(process.cwd(), 'src/post/posts.json'),
    JSON.stringify(Mappa, null, 2)
)