
import ListaClassi from '../Home/ListaClassi'
import { SidebarContext } from '../../context/SidebarContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

/**
 * 
 * Per ora contiene solo ListaClassi ma è un modo 
 * di tenere tutte le future cose che potremmo mettere
 */

export default function Sidebar() {

    const { isOpen } = useContext(SidebarContext)

    return (
        <div className={`sidebar ${isOpen ? 'shifted' : ''}`}> {/** Classe sta in App.css */}
            <div className="Sidebar_Logo_Div">
                <img className="Logo_Sidebar" src="/FerrarisBlog/assets/img/logolight.png"></img>
            </div>
            <div className="Opzioni_Div">
                <div className="Opzione_Home_Div">
                    <Link to="/" className="Home_Link">
                        <button className="Opzione_Home_Button">
                            <div className="Opzione_Home_Logo_Div">
                            </div>
                            <div className="Opzione_Home_Testo_Div">
                                <p>Home</p>
                            </div>
                        </button>
                    </Link>

                    <Link to="/ChiSiamo" className="ChiSiamo_Link">
                        <button className="Opzione_ChiSiamo_Button">
                            <div className="Opzione_ChiSiamo_Logo_Div">
                            </div>
                            <div className="Opzione_ChiSiamo_Testo_Div">
                                <p>Chi Siamo</p>
                            </div>
                        </button>
                    </Link>

                    <div className="Testo_Classi_Div">
                        <p className="Testo_Classi">Le Classi</p>
                    </div>

                </div>
            </div>
            <ListaClassi />
        </div>
    )
}