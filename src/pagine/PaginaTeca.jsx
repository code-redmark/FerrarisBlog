import { fetchPopulatedTecaById, fetchTecaChildren } from "../api/Teca.mjs";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import '../stile/pagine/PaginaTeca.css';

import Caricamento from "../pagine/Caricamento.jsx";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,      // Loop infinito
  speed: 500,          // Velocità di transizione in ms
  slidesToShow: 1,    
  slidesToScroll: 1,  
  autoplay: true,     
  autoplaySpeed: 3000, 
  arrows: false,        
};

export default function PaginaTeca() {

    const { idTeca, ASclasse, idClasse } = useParams();

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
        <div className="Pagina">
            <div className="TestaTeca">
                <div className="TitoloTeca">
                        <h1>{teca.title}</h1>
                        <p>{teca.description}</p>
                </div>

                <div className="Carosello">
                    <Slider
                        {...settings}
                    >
                        {
                            teca.images.map((img, index) => (
                                <div key={index} className="divImgCarosello">
                                    <img src={`${import.meta.env.VITE_CLOUDINARY_URL}/${img}`} alt={`Immagine ${index}`} 
                                       className="imgCarosello"  
                                    />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>

            
            
            <div className="divListaPostTeca">
                <h1 className="HeaderListaPost">Post</h1>
                <ul className="ListaPostTeca">
                    {
                        sottoPostTeca && sottoPostTeca.map(sottoPost => (
                            <li key={sottoPost._id} className="ListaPostTeca">
                                <Link to={`/classe/${ASclasse}/${idClasse}/post/id/${sottoPost._id}`} className="LinkSottoPost">
                                    <div className="SottoPostTeca">
                                       {sottoPost.title} - {sottoPost.dataPost.slice(0, 10).replace(/-/g, '/')}
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        
    )
}