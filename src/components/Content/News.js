import React from 'react'

const NewsHome = () => {
    return (
        <>
            <div className="h-56 bg-white relative flex flex-col items-center justify-center mb-12 overflow-hidden">
                <div className="h-auto font-light flex flex-col items-center p-2 m-auto">
                    <h1 className="text-3xl">Notícias/Atualizações</h1>
                </div>
                <div className="h-auto relative flex flex-col items-center justify-center p-2 overflow-hidden">
                    <div className="h-auto relative flex flex-row items-center justify-center p-2">
                        <div className="items-center text-white bg-blue-500 p-2 flex justify-center font-light mr-2 rounded-md">
                            05/04
                        </div>
                        <div className="h-auto relative flex flex-col p-2">
                            <div>
                                Lançamento do servidor
                            </div>
                            <div>
                                <small>O lançamento do servidor foi adiado para... <a className="hover:text-blue-500 hover:underline" href="/" alt="Ver Mais">Ver Mais</a></small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-auto relative flex flex-col items-center justify-center p-2 overflow-hidden">
                    <div className="h-auto relative flex flex-row items-center justify-center p-2">
                        <div className="items-center text-white bg-blue-500 p-2 flex justify-center font-light mr-2 rounded-md">
                            05/04
                        </div>
                        <div className="h-auto relative flex flex-col p-2">
                            <div>
                                Lançamento do servidor
                            </div>
                            <div>
                                <small>O lançamento do servidor foi adiado para... <a className="hover:text-blue-500 hover:underline" href="/" alt="Ver Mais">Ver Mais</a></small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-auto relative flex flex-col items-center justify-center p-2 overflow-hidden">
                    <div className="h-auto relative flex flex-row items-center justify-center p-2">
                        <div className="items-center text-white bg-blue-500 p-2 flex justify-center font-light mr-2 rounded-md">
                            05/04
                        </div>
                        <div className="h-auto relative flex flex-col p-2">
                            <div>
                                Lançamento do servidor
                            </div>
                            <div>
                                <small>O lançamento do servidor foi adiado para... <a className="hover:text-blue-500 hover:underline" href="/" alt="Ver Mais">Ver Mais</a></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsHome
