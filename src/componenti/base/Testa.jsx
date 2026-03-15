import { Link } from 'react-router-dom'

import "../../stile/base/Testa.css"

export default function Testa() {
    return (
        <main>
            <div className='Testa'>
            <ul id='ListaTesta'>
                <li>
                    <Link to="/">
                        <img id="logo" src="/FerrarisBlog/assets/img/logolight.png" alt="logo" />
                    </Link>
                </li>
            </ul>
            
            </div>
            <div id='arcobaleno' style={{height: "3px"}}></div>
        </main>
        
    )
}