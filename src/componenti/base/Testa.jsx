import { Link } from 'react-router-dom'
import logolight from "../Assets/Img/logolight.png" // logo light mode
import logodark from "../Assets/Img/logodark.png" // logo dark mode
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
                    <Link to="/Orientamento" className='button-text'>
                        Orientamento
                    </Link>
                </li>
            </ul>
        </div>
    )
}