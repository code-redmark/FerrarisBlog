import Testa from './base/Testa'
import Piedi from './base/Piedi'
import "../stile/pagine/PaginaPost.css"

import ReactMarkdown from "react-markdown"

// fa gli a capo ogni volta che nel testo c'è un LF
import remarkBreaks from 'remark-breaks';


export default function PaginaPost({post}) {
    
    return (

        <div id="Pagina">
            <div className='TestaPost'>
                {post.title}
                <p>
                    {post.description}
                </p>

                <img id="coverPost" src={post.cover || null}/> {/* cover sarà aggiunta col prossimo merge */}
            </div>

            <div className='CorpoPost'>

                {/*
                 * L'idea qui è di avere due colonne, una in cui c'è il testo
                 * e quella affianco con le immagini, quindi dovremmo dare uno
                 * per le img e gli istogrammi e tutto il resto che li sposta a destra 
                 * e uno stile che metto tutto a destra per il testo
                 */}
                    <ReactMarkdown 
                        remarkPlugins={[remarkBreaks]}
                        /**
                         * react-markdown da solo non riesce a scrivere più di un \n,
                         * grazie a remarkBreaks e alla piccola formattazione in children
                         * riusciamo ad ottenere i line feed così come sono nel file
                         */
                        children={post.content.replace(/\n/gi, "&nbsp; \n").trim()}
                    />         
            </div>
        </div>

        
    )
}