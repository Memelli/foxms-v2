import React, { useState } from 'react'

const NewsHome = ({ title, desc, date, type }) => {
    const blue = 'bg-blue-500 hover:bg-blue-600'
    const [tag, setTag] = useState('')
    const [bg, setBg] = useState('')
     
   
        return (
            <>
                
                    <div className="px-10 my-4 py-6 rounded shadow-md hover:shadow-xl bg-white w-4/5 mx-auto">
                        <div className="flex justify-between items-center">
                            <span className="font-light text-gray-600">{date}</span>
                            <a className={`font-bold text-gray-100 rounded px-2 py-1 
                            ${type === 1 ? 'bg-blue-500 hover:bg-blue-600' : type === 2 ? 'bg-green-500 hover:bg-green-600' : type === 3 ? 'bg-red-500 hover:bg-red-600' : type === 4 ? 'bg-yellow-500 hover:bg-yellow-600' : '' } `} 
                            href="/">
                                    {type === 1 ? 'Notícias' : type === 2 ? 'Eventos' : type === 3 ? 'Manutenção' : type === 4 ? 'Atualização' : '' }
                                </a>
                        </div>
                        <div className="mt-2">
                            <a className="text-2xl text-gray-700 font-bold hover:text-gray-600" href="/">
                                {title}
                            </a>
                            <p className="mt-2 text-gray-600">
                                {desc}
                            </p>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <a className="text-blue-600 hover:underline" href="/">Ver mais</a>
                        </div>
                    </div>
                
                
            </>
        )
}

export default NewsHome
