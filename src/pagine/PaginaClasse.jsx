import Piedi from "../componenti/base/Piedi";
import Testa from "../componenti/base/Testa";

import posts from "../../src/post/posts.json"
import { Link } from "react-router-dom";

import "../stile/pagine/PaginaClasse.css"

export default function PaginaClasse({ anno, sezione }) {

    const chiave = `${anno}${sezione.toLowerCase()}`
    const postsClasse = Object.values(posts[chiave] || {})

    return (
        <main>


                <div className="PostClasse">
                    <ul>
                        {postsClasse.map(post => (
                            <li key={post.id}>
                                <Link to={`/classe/${chiave}/post/${post.slug}`}>
                                
                                <p>{post.title}</p>

                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>  
                

        </main>
            
            
        
    )
}