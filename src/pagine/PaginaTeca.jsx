import { fetchPopulatedTecaById, fetchTecaChildren } from "../api/Teca.mjs";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Caricamento from "../pagine/Caricamento.jsx";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Highlight from "../componenti/Home/Highlight.jsx"

const settings = {
  infinite: true,      // Loop infinito
  speed: 500,          // Velocità di transizione in ms
  slidesToShow: 1,     // Quante immagini mostrare contemporaneamente
  slidesToScroll: 1,   // Quante immagini scorrono per volta
  autoplay: true,      // Avvia il carosello automaticamente
  autoplaySpeed: 3000, // Tempo tra una transizione e l'altra in ms
};

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

    useEffect(() => {
        if (!teca || !teca.images) return;
        for (let image of teca.images) {
            console.log(`${import.meta.env.VITE_CLOUDINARY_URL}/${image}`);
        }
    }, [teca]);

    if (!teca) return <Caricamento />
    return (
        <div style={{display: "flex", flexDirection: "column", backgroundColor: "#222", padding: "20px"}}>
            
            <div className="TestaTeca" style={{display: "flex", flexDirection: "row"}}>
                <div className="TitoloTeca" style={{color: 'white', display: "flex", flexDirection: "column", width: "100%", gap: "10px", padding: "0 20px", textAlign: "left"}}>
                        <h1>{teca.title}</h1>
                        <p>{teca.description}</p>
                </div>

                <div className="Carosello"  style={{ width: "100%", maxWidth: "900px", height: "400px", margin: "20px auto", padding: "0 20px" }}>
                    <Slider
                        {...settings}
                    >
                        {
                            teca.images.map((img, index) => (
                                <div key={index}>
                                    <img src={`${import.meta.env.VITE_CLOUDINARY_URL}/${img}`} alt={`Immagine ${index}`} 
                                        style={{ width: "100%", height: "400px", objectFit: "cover"}} 
                                    />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>

            
            
            <div>
                <p>Lista dei post:</p>
                <ul className="ListaPostTeca">
                    {
                        sottoPostTeca && sottoPostTeca.map(sottoPost => (
                            <li key={sottoPost._id}>
                                <Link to ={`/classe/${teca.class.anno}${teca.class.sezione}/${teca.class._id}/post/${sottoPost.slug}/${sottoPost._id}`}>
                                    <Highlight highlight={sottoPost} collezione='post' />
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        
    )
}