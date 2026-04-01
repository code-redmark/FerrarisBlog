import "../App.css"

import ListaHighlight from "../componenti/Home/ListaHighlight.jsx"
import ListaClassi from "../componenti/Home/ListaClassi.jsx"

import "../stile/pagine/Home.css"
import "../stile/ClassiHome.css"

import { useEffect, useState } from "react"

import { fetchClasses } from "../api/Class.mjs"

export default function Home() {

    // State della sidebar
    let [sidebar, toggleBar] = useState(false);
    let barClass;

    if (sidebar) {
        barClass = 'aperta';
    } else barClass = 'chiusa';

    const [classi, setClassi] = useState([]);
    
    useEffect(() => {
        const fetch = async () => {
            const data = await fetchClasses()
            setClassi(data)
        }
        fetch()
    }, [])

    
    return (
        <div>
                <div id="content">
                    <ListaClassi classi={classi}/>
                    <ListaHighlight/>
                </div>
        </div>
        
    )
}