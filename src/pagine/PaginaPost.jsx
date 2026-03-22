import "../stile/pagine/PaginaPost.css"

import ReactMarkdown from "react-markdown"

import remarkBreaks from 'remark-breaks';
import { useState, useEffect } from 'react';

import { fetchPostById } from "../api/Post.mjs"
import { useParams } from "react-router-dom";

export default function PaginaPost() {
    
    const { ASClasse, idClasse, slug, idPost } = useParams();

    if (!idPost) return <p>Post non trovato</p>

    const [post, setDatiPost] = useState(null);
    
    useEffect(() => {
        fetchPostById(idPost)
            .then( data => setDatiPost(data))
    }, [idPost])
    
    if (!post) return <h1>Caricamento</h1>
    
    return (
        <div id="Pagina">
            <div className='TestaPost'>
                {post.title}
                <p>
                    {post.description}
                </p>

                <img id="coverPost" src={post.cover || null}/> {/* cover sarà aggiunta col prossimo merge */}
            </div>

            <div className='CorpoPost'>

                    <ReactMarkdown 
                        remarkPlugins={[remarkBreaks]}
                        children={post.content.replace(/\n/gi, "&nbsp; \n").trim()}
                    />         
            </div>
        </div>

        
    )
}