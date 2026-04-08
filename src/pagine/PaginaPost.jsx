import "../stile/pagine/PaginaPost.css"

import ReactMarkdown from "react-markdown"

import remarkBreaks from 'remark-breaks';
import { useState, useEffect } from 'react';

import { fetchPostById } from "../api/Post.mjs"
import { useParams } from "react-router-dom";

export default function PaginaPost() {
    
    const { idPost } = useParams();

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
                <div id='cover'>
                    <img id="coverPost" src={`${import.meta.env.VITE_CLOUDINARY_URL}/${post.cover}`} alt="foto"/>
                </div>
                <div id='Testo'>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                </div>
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