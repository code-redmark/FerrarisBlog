import fileHighlights from "../../highlights.json";
import Highlight from "./Highlight"

import { useEffect, useState } from "react"

import { fetchPopulatedPosts } from "../../api/Post.mjs";

import "../../stile/HighlightHome.css"

export default function ListaHighlight() {

    const [posts, setPosts] = useState(null)

    useEffect(() => {
        fetchPopulatedPosts()
        .then (data => setPosts(data))
    }, [])

    if (posts == null) return <h1>Caricamento</h1>

    const PostMap = {}
    posts.forEach(post => {
        PostMap[post.slug] = post
        console.log(`Id post: ${post.slug}`)
    });

    return (
        <div className="ListaHighlight">
            {
                fileHighlights.highlights.map(slugPost =>
                <div key={slugPost}>
                    <Highlight
                        post={PostMap[slugPost]}
                    />
                </div>
                    
                )
            }
            
        </div>
    )
}