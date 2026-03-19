import "../App.css"
import ListaHighlight from "../componenti/Home/ListaHighlight.jsx"

import "../stile/pagine/Home.css"
import "../stile/ClassiHome.css"

import { useState } from "react"

export default function Home() {

    // State della sidebar
    let [sidebar, toggleBar] = useState(false);
    let barClass;

    if (sidebar) {
        barClass = 'aperta';
    } else barClass = 'chiusa';

    return (
        <div>
            <div className="pc">

                <div id="content">
                    <ListaClassi/>
                    <ListaHighlight/>
                </div>

            </div>

            <div className="mobile">

                <button className="sidebar_button" onClick={() => toggleBar(!barClass)}>LE CLASSI</button>
                <div className={`sidebar ${barClass}`}>
                    <ListaClassi/>
                </div>

            </div>

        </div>
        
    )
}