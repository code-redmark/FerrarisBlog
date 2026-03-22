import { Link } from "react-router-dom";
import "../stile/pagine/PaginaClasse.css"
import { useEffect, useState } from "react";

import { fetchClassById } from "../api/Class.mjs"
import { fetchClassPosts } from "../api/Post.mjs"

export default function PaginaClasse({ idClasse }) {

    const [classe, setDatiClasse] = useState(null);
    useEffect(() => {
            fetchClassById(idClasse)
                .then(data => setDatiClasse(data))
    }, [idClasse]);


    const [postsClasse, setDatiPostsClasse] = useState([]);
    useEffect(() => {
            fetchClassPosts(idClasse)
            .then(data => setDatiPostsClasse(data))
    }, [idClasse]);

    if (!classe) return <p>Caricamento</p>

    const chiave = `${classe.anno}${classe.sezione}`

    let bioClasse = "Che strani, non hanno una biografia!"
    if (classe.bio) bioClasse = classe.bio;
 
    return (
        <div className="PostClasse">

            <div id="InfoClasse">
                <div id="ThisIs">
                    <h1>Questa è la</h1>
                    <h1 id="nomeClasse">{classe?.anno}{classe?.sezione}</h1>
                </div>
                <div id="Biografia">
                    <h2 className="pc">Biografia</h2>
                    <p>{bioClasse}</p>
                </div>
                
            </div>

            <div id="ListaPost">
                {
                    postsClasse && postsClasse.map(post => (
                        <div key={`${post.slug}-${chiave}-${post.dataPost}`}>
                            <Link to={`/classe/${chiave}/post/${post.slug}`}>
                                <div className="Post">
                                    {post.title} - {post.dataPost}
                                </div>
                            </Link>
                        </div>  
                ))}
            </div>
        </div>  
    )
}