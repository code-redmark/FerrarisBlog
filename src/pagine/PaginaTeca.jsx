import { fetchPopulatedTecaById, fetchTecaChildren } from "../api/Teca.mjs";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Caricamento from "../pagine/Caricamento.jsx";

export default function PaginaTeca() {

    const { idTeca } = useParams();

    const [teca, setDatiTeca] = useState(null);
    useEffect(() => {
        fetchPopulatedTecaById(idTeca) // Ci server populated perché ho bisogno di trovare tutti i sotto post che stanno nella sua stessa classe
            .then( data => setDatiTeca(data))
    }, [idTeca])

    const [sottoPostTeca, setSottoPostTeca] = useState(null);
    useEffect(() => {
        fetchTecaChildren(idTeca)
            .then( data => setSottoPostTeca(data))
    }, [idTeca])
    
    if (!teca) return <Caricamento />

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