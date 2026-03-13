import { Link } from 'react-router-dom'

import "../../stile/base/Testa.css"

export default function Testa() {
    return (
        <div className='Testa'>
            <ul id='ListaTesta'>
                <li>
                    <Link to="/">
                        <img id="logo" src={`assets/img/logolight.png`} alt="logo" />
                    </Link>
                </li>
                <li>
                    <Link to="/Orientamento" className='test' alt='PULSANTEORIENTAMENTO'>
                        ORIENTAMENTO
                    </Link>
                </li>
            </ul>
        </div>
    )
}