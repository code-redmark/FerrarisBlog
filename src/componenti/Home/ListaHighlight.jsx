import fileHighlights from "../../highlights.json";
import Highlight from "./Highlight"

import { useEffect, useState } from "react"

import "../../stile/HighlightHome.css"

export default function ListaHighlight() {

    const [posts, setPosts] = useState(null)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER}/posts/pop`)
        .then(res => res.json())
        .then (data => setPosts(data))
    }, [])

    if (posts == null) return <h1>Caricamento</h1>
    
    return (
        <div className="ListaHighlight">
            {
                
                fileHighlights.highlights.map(idPost =>
                <div key={idPost}>
                    <Highlight
                        post={posts.find(post => post._id == idPost)}
                    />
                </div>
                    
                )
            }
            
        </div>
    )
}