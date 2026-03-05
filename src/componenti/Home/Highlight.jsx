import Contenuto from "../base/Contenuto";

import "../../stile/Highlight.css"

export default function Highlight({titolo, descrizione, stringaData}) {


    const currentDate = new Date(stringaData);
    const italia = currentDate.toLocaleDateString("it-IT", {timeZone: "Europe/Rome"});

    let ms = Date.now() - new Date(italia);

    const secondi = ms / 1000;
    const minuti = secondi / 60;
    const ore = minuti / 60;
    const giorni = ore / 24;
    const mesi = giorni / 30;
    const anni = mesi / 12;
    

    let tempo;

    if (anni > 0) {
        tempo = '${anni} anni fa';
    } else if (mesi > 0) {
        tempo = '${mesi} mesi fa';
    } else if (giorni > 0) {
        tempo = '${giorni} giorni fa';
    } else if (ore > 0) {
        tempo = '${ore} ore fa';
    } else if (minuti > 0) {
        tempo = '${minuti} minuti fa';
    } else {
        tempo = 'Adesso';
    }

    return (
        
            <Contenuto larghezza="75vh" altezza="24vh">
                <div className="Highlight">
                    <h1>{titolo}</h1>
                    <h2 id="Tempo">{tempo}</h2>
                    <p id="Descrizione">{descrizione}</p>
                </div>
            </Contenuto>
    )
}