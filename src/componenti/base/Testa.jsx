import { Link } from 'react-router-dom'
import logolight from "../Assets/logolight.png" // logo light mode
import logodark from "../Assets/logodark.png" // logo dark mode
import button from "../Assets/button.png" // questo è un template da usare eventualmente, non ha nessuna scritta sopra
import buttonori from "../Assets/buttonorientamento.png"
import "../../stile/base/Testa.css"

export default function Testa() {
    return (
        <div className='Testa'>
            <ul id='ListaTesta'>
                <li>
                    <Link to="/">
                        <img id='logo' src={logolight} alt='LOGOFERRARIS' />
                    </Link>
                </li>
                <li>
                    <Link to="/Orientamento">
                        <img id='button' src={buttonori} alt='BUTTON' style={{ width: "160px", height: "auto"}}/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}