import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import './index.css'

const Accordion = ({title, info}) => {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className="w-5/6 h-auto rounded shadow-md hover:shadow-lg hover:bg-blue-600 bg-blue-500 text-white">
            <article className='question border rounded'>
                <header>
                    <h4 onClick={() => setExpanded(!expanded)} className='question-title w-full text-left'>
                        {title}
                    </h4>
                    <button className='btn' onClick={() => setExpanded(!expanded)}>
                        {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>
                </header>
                {expanded && 
                <div className="w-full bg-white py-5 text-black rounded">{info}</div>}
            </article>
        </div>
    )
}

export default Accordion
