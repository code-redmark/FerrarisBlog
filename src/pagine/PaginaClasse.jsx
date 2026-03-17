import posts from "../../src/post/posts.json"
import { Link } from "react-router-dom";

import "../stile/pagine/PaginaClasse.css"

export default function PaginaClasse({ anno, sezione, bio }) {

    const chiave = `${anno}${sezione.toLowerCase()}`
    const postsClasse = Object.values(posts[chiave] || {})

    // da implementare in sviluppo
    let bioClasse = "Che strani, non hanno una biografia!"
    if (bio) bioClasse = bio;

    let noPost = false
    if (Object.length.valueOf(postsClasse) == 0) noPost = true;
        
    return (
        <div className="PostClasse">

            <div id="InfoClasse">
                <div id="ThisIs">
                    <h1>Questa è la</h1>
                    <h1 id="nomeClasse">{anno}{sezione}</h1>
                </div>
                <div id="Biografia">
                    <h2 className="pc">Biografia</h2>
                    <p>{bioClasse}</p>
                </div>
                
            </div>
            <div id="ListaPost">
                {
                    postsClasse.map(post => (
                        <Link to={`/classe/${chiave}/post/${post.slug}`}>
                                <div className="Post" key={post.id}>
                                    {post.title} - {post.dataPost}
                                </div>
                        </Link>
                        
                ))}
            </div>
        </div>  
    )
}