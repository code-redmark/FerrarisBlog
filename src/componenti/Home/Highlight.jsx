import { Link } from "react-router-dom";

import "../../stile/HighlightHome.css"

export default function Highlight({post}) {

    const classe = `${post.class.anno}${post.class.sezione}`

    let currentDate = new Date(post.dataPost);
    let ms = Date.now() - currentDate;
    console.log(ms)

    let secondi = Math.floor(ms / 1000);
    let minuti = Math.floor(secondi / 60);
    let ore = Math.floor(minuti / 60);
    let giorni = Math.floor(ore / 24);
    let mesi = Math.floor(giorni / 30);
    let anni = Math.floor(mesi / 12);
    
    let tempo;

    if (anni > 0) {
        tempo =`${anni} anni fa`;
    } else if (mesi > 0) {
        tempo = `${mesi} mesi fa`;
    } else if (giorni > 0) {
        tempo = `${giorni} giorni fa`;
    } else if (ore > 0) {
        tempo = `${ore} ore fa`;
    } else if (minuti > 0) {
        tempo = `${minuti} minuti fa`;
    } else {
        tempo = 'Adesso';
    }

    return (
        
            <div className="Highlight">
                <div id="testo">
                    <div id="Titolo">
                        {post.title}
                    </div>

                    <div id="Descrizione">
                        {post.description}
                    </div>

                    <div id="FondoHighlight"> {/*Serve per non far sovrapporre con la descrizione */} 
                        <div id="Data">
                        {classe} - {tempo}
                        </div>
                        
                        <div>
                            <Link to={`/classe/${classe}/post/${post.slug}`}>
                                <div id="Leggi">
                                    <p>LEGGI</p>
                                </div>
                            </Link>
                        </div>
                        
                    </div>
                    
                    

                </div>

                <div id="immagine">
                        <img alt="Nessuna foto, sono timidi :("></img>                            
                </div>
            </div>

    )
}