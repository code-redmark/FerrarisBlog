import fileHighlights from "../../highlights.json";
import Highlight from "./Highlight"

import { useEffect, useState } from "react"

import { fetchPopulatedPosts } from "../../api/Post.mjs";
import { fetchPopulatedTecas } from "../../api/Teca.mjs";

import "../../stile/HighlightHome.css"

import Caricamento from "../../pagine/Caricamento";

export default function ListaHighlight() {

    const [posts, setPosts] = useState(null)

    useEffect(() => {
        fetchPopulatedPosts()
        .then (data => setPosts(data))
        .catch(err => console.log(err))
    }, [])


    const [tecas, setTecas] = useState(null)
    useEffect(() => {
        fetchPopulatedTecas()
        .then (data => setTecas(data))
        .catch(err => console.log(err))
    }, [])

    if (!posts || !tecas) return <Caricamento />

    const PostMap = {}
    posts.forEach(post => {
        PostMap[post.slug] = post
    });
    const TecaMap = {}
    tecas.forEach(teca => {
        TecaMap[teca.slug] = teca
    });

    return (
        <div className="ListaHighlight">
            {
                fileHighlights.highlights.map(slugPost =>
                <div key={slugPost}>
                    <Highlight
                        highlight={
                            PostMap[slugPost] ? PostMap[slugPost] : 
                            TecaMap[slugPost] ? TecaMap[slugPost] : null
                        }
                        collezione={PostMap[slugPost] ? 'post' : 
                            TecaMap[slugPost] ? 'teca' : null
                        }
                    />
                </div>
                    
                )
            }
            
        </div>
    )
}