import Contenuto from "../componenti/base/Contenuto";
import Piedi from "../componenti/base/Piedi";
import Testa from "../componenti/base/Testa";

import posts from "../../src/post/posts.json"

export default function PaginaClasse({ anno, sezione }) {

    const chiave = `${anno}${sezione.toLowerCase()}`
    const postsClasse = Object.values(posts[chiave] || {})

    return (
        <div className="PaginaClasse">
            <Testa />

            <Contenuto larghezza="100%" altezza="60vh">
                <ul>
                    {postsClasse.map(post => (
                        <li key={post.id}>
                            {post.title}
                        </li>
                    ))}
                </ul>
            </Contenuto>

            <Piedi />
        </div>
    )
}