import Contenuto from "../base/Contenuto";
import { Link } from "react-router-dom";

import "../../stile/Highlight.css"

export default function Highlight({titolo, descrizione, stringaData}) {


    let currentDate = new Date(stringaData);
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
        
            <Contenuto larghezza="130vh" altezza="75vh">
                <div className="Highlight">
                    <div id="testo">
                        <div id="Titolo">
                            {titolo}
                        </div>

                        <div id="Descrizione">
                            {descrizione}
                        </div>

                        <div id="Data">
                            {tempo}   
                        </div>
                    </div>

                    <div id="immagine">
                        <div className="Immagine">
                            <img alt="Foto"></img>                            
                        </div>
                        <div className="LeggiPost">
                            <Link>
                                <div>
                                    <p>Leggi</p>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>

            </Contenuto>
    )
}