import { useEffect, useState } from 'react'
import '../stile/pagine/PaginaLogin.css'

import { fetchClasses } from '../api/Class.mjs'
import { postLogin } from '../api/Auth.mjs'
import Caricamento from './Caricamento'

export default function PaginaLogin() {
    
    const [classi, setClassi] = useState(null)

    useEffect(() => {
        const fetch = async () => {
            const data = await fetchClasses()
            setClassi(data)
        }
        fetch()
    }, [])

    if (!classi) return <Caricamento />

    return (
        <div className="PaginaLogin">
            <div className='RiquadroLogin'>
                <form onSubmit={postLogin} acceptCharset='utf-8'>
                    <select name='classe'>
                        {
                            classi.map(classe => 
                                <option key={classe._id} value={classe._id}>
                                    {classe.anno}{classe.sezione}
                                </option>
                            )
                        }
                    </select>
                    <div>
                        PWD: <input type="password" name='password'/>
                    </div>
                    
                    <button type='submit'>Entra</button>
                </form>
            </div>
        </div>
    )
}