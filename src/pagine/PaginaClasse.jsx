import { Link, useParams } from "react-router-dom";
import "../stile/pagine/PaginaClasse.css"
import { useEffect, useState } from "react";

import { fetchClassById } from "../api/Class.mjs"
import { fetchClassTeche } from "../api/Post.mjs"
import Caricamento from "./Caricamento";

export default function PaginaClasse() {

    const { idClasse } = useParams()

    const [classe, setDatiClasse] = useState(null);
    useEffect(() => {
        const fetch = async () => {
            const data = await fetchClassById(idClasse)
            setDatiClasse(data)
        }
        fetch()
    }, [idClasse]);


    const [techeClasse, setDatitecheClasse] = useState(null);
    useEffect(() => {
        const fetch = async () => {
            const data = await fetchClassTeche(idClasse)
            setDatitecheClasse(data)
        }
        fetch()
    }, [idClasse]);

    if (!classe || !techeClasse) return <Caricamento />

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
                    techeClasse && techeClasse.map(teca => (
                        <div key={`${teca.slug}-${chiave}-${teca.dataPost}`}>
                            <Link to={`/classe/${chiave}/${classe._id}/post/${teca.slug}/${teca._id}`}>
                                <div className="Post">
                                    {teca.title} - {teca.dataPost}
                                </div>
                            </Link>
                        </div>  
                ))}
            </div>
        </div>  
    )
}