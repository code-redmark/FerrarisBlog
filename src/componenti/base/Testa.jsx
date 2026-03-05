import { Link } from 'react-router-dom'
import logo from "../Assets/logo.png"
import "../../stile/base/Testa.css"

export default function Testa() {
    return (
        <div className='Testa'>
            <ul id='ListaTesta'>
                <li>
                    <Link to="/">
                        <img id='logo' src={logo} alt='LOGOFERRARIS' />
                    </Link>
                </li>
                <li>
                    <Link to="/Orientamento">
                    Orientamento
                    </Link>
                </li>
            </ul>
        </div>
    )
}