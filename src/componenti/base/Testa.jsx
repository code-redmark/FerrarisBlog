import { Link } from 'react-router-dom'
import logolight from "../../../public/Assets/Img/logolight.png" // logo light mode
import logodark from "../../../public/Assets/Img/logodark.png" // logo dark mode
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
                    <Link to="/Orientamento" className='button-text' style={{backgroundColor: "black"}}>
                        ORIENTAMENTO
                    </Link>
                </li>
            </ul>
        </div>
    )
}