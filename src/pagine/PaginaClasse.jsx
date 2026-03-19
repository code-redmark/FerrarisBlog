import { Link } from "react-router-dom";

import "../stile/pagine/PaginaClasse.css"
import { useEffect, useState } from "react";

export default function PaginaClasse({ idClasse }) {

    const [classe, setDatiClasse] = useState();

    useEffect(() => {
        fetch(`${process.env.DEV_SERVER}/classes/${idClasse}`)
            .then(res => res.json())
            .then(data => setDatiClasse(data))
            .catch(err => console.log(err))
    }, []);

    /**
     * ? è il modo per accedere a una proprietà di un oggetto che potrebbe essere undefined, 
     * in questo modo evitiamo errori di tipo "Cannot read property 'anno' of undefined" nel 
     * caso in cui classe sia ancora undefined (ad esempio durante il caricamento dei dati). 
     * Se classe è undefined, allora classe?.anno restituirà undefined invece di generare un errore.
     */
    const chiave = `${classe?.anno}${classe?.sezione}`

    // da implementare in sviluppo
    let bioClasse = "Che strani, non hanno una biografia!"
    if (classe?.bio) bioClasse = classe.bio;
 
    return (
        <div className="PostClasse">

            <div id="InfoClasse">
                <div id="ThisIs">
                    <h1>Questa è la</h1>
                    <h1 id="nomeClasse">{classe.anno}{classe.sezione}</h1>
                </div>
                <div id="Biografia">
                    <h2 className="pc">Biografia</h2>
                    <p>{bioClasse}</p>
                </div>
                
            </div>

            <div id="ListaPost">
                {
                    classe.posts?.map(post => (
                        <Link to={`/classe/${chiave}/post/${post.slug}`}>
                                <div className="Post" key={post.codice}>
                                    {post.title} - {post.dataPost}
                                </div>
                        </Link>
                        
                ))}
            </div>
        </div>  
    )
}