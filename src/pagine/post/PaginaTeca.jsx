import { fetchPopulatedPostById, fetchTecaChildrenByTecaId, } from "../../api/Post.mjs";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function PaginaTeca() {

    const { idPost: idTeca } = useParams();

    if (!idTeca) return <p>Post non trovato</p>

    const [teca, setDatiTeca] = useState(null);
    
    useEffect(() => {
        fetchPopulatedPostById(idTeca) // Ci server populated perché ho bisogno di trovare tutti i sotto post che stanno nella sua stessa classe
            .then( data => setDatiTeca(data))
    }, [idTeca])

    const [sottoPostTeca, setSottoPostTeca] = useState(null);
    useEffect(() => {
        fetchTecaChildrenByTecaId(idTeca)
            .then( data => setSottoPostTeca(data))
    }), [idTeca]
    
    if (!teca) return <h1>Caricamento</h1>

    return (
        <div>
            <div>
                <h1>Teca del post {teca.title}</h1>
            </div>
            <div>
                <p>Lista dei post:</p>
                <ul>
                    {
                        sottoPostTeca && sottoPostTeca.map(sottoPost => (
                            <li key={sottoPost._id}>
                                <Link to ={`/classe/${teca.class.anno}${teca.class.sezione}/${teca.class._id}/post/${sottoPost.slug}/${sottoPost._id}`}>
                                    {sottoPost.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        
    )
}