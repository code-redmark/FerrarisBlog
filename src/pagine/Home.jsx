import "../App.css"

import ListaHighlight from "../componenti/Home/ListaHighlight.jsx"
import ListaClassi from "../componenti/Home/ListaClassi.jsx"

import "../stile/pagine/Home.css"
import "../stile/ClassiHome.css"

import { useEffect, useState } from "react"

export default function Home() {

    // State della sidebar
    let [sidebar, toggleBar] = useState(false);
    let barClass;

    if (sidebar) {
        barClass = 'aperta';
    } else barClass = 'chiusa';

    const [classi, setClassi] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER}/classes`)
            .then(res => res.json())
            .then(data => setClassi(data))
    }, [])
    return (
        <div>
            <div className="pc">

                <div id="content">
                    <ListaClassi classi={classi}/>
                    <ListaHighlight/>
                </div>

            </div>

            <div className="mobile">

                <button className="sidebar_button" onClick={() => toggleBar(!barClass)}>LE CLASSI</button>
                <div className={`sidebar ${barClass}`}>
                    <ListaClassi classi={classi}/>
                </div>

            </div>

        </div>
        
    )
}