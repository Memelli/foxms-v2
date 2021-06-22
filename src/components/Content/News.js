import React from 'react'

const NewsHome = () => {
    return (
        <>
            <div className="relative flex flex-row items-center justify-center flex-wrap p-8">
                <div className="h-auto bg-white relative flex flex-col items-center justify-center mb-12 overflow-hidden">
                    <div className="h-auto font-light flex flex-col items-center p-2 m-auto">
                        <h1 className="text-3xl">Notícias</h1>
                    </div>
                    <div className="h-auto relative flex flex-col items-center justify-center p-2 overflow-hidden">
                        <div className="h-auto relative flex flex-row items-center justify-center p-2 sm:p-0 md:p-0">
                            <div className="items-center text-white bg-blue-500 p-2 flex justify-center font-light mr-2 rounded-md">
                                05/04
                            </div>
                            <div className="h-auto relative flex flex-col p-2">
                                <div>
                                    Notícia
                                </div>
                                <div>
                                    <small>O lançamento do servidor foi adiado para... <a className="hover:text-blue-500 hover:underline" href="/" alt="Ver Mais">Ver Mais</a></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-auto relative flex flex-col items-center justify-center p-2 overflow-hidden">
                        <div className="h-auto relative flex flex-row items-center justify-center p-2">
                            <div className="items-center text-white bg-red-500 p-2 flex justify-center font-light mr-2 rounded-md">
                                05/04
                            </div>
                            <div className="h-auto relative flex flex-col p-2">
                                <div>
                                    Manutenção
                                </div>
                                <div>
                                    <small>Uma manutenção foi agendada para o dia... <a className="hover:text-blue-500 hover:underline" href="/" alt="Ver Mais">Ver Mais</a></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-auto relative flex flex-col items-center justify-center p-2 overflow-hidden">
                        <div className="h-auto relative flex flex-row items-center justify-center p-2">
                            <div className="items-center text-white bg-yellow-500 p-2 flex justify-center font-light mr-2 rounded-md">
                                05/04
                            </div>
                            <div className="h-auto relative flex flex-col p-2">
                                <div>
                                    Atualização
                                </div>
                                <div>
                                    <small>Para a correção de um bug, uma atualização foi... <a className="hover:text-blue-500 hover:underline" href="/" alt="Ver Mais">Ver Mais</a></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-1">
                        <a className="hover:text-blue-500 hover:underline" href="/">Mais Eventos</a>
                    </div>
                </div>

                <div className="h-auto bg-white relative flex flex-col items-center justify-center mb-12 overflow-hidden">
                    <div className="h-auto font-light flex flex-col items-center p-2 m-auto">
                        <h1 className="text-3xl">Eventos</h1>
                    </div>
                    <div className="h-auto relative flex flex-col items-center justify-center p-2 overflow-hidden">
                        <div className="h-auto relative flex flex-row items-center justify-center p-2 sm:p-0 md:p-0">
                            <div className="items-center text-white bg-yellow-900 p-2 flex justify-center font-light mr-2 rounded-md">
                                05/04
                            </div>
                            <div className="h-auto relative flex flex-col p-2">
                                <div>
                                    Evento finalizado
                                </div>
                                <div>
                                    <small>Obrigado a todos que participaram do evento... <a className="hover:text-blue-500 hover:underline" href="/" alt="Ver Mais">Ver Mais</a></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-auto relative flex flex-col items-center justify-center p-2 overflow-hidden">
                        <div className="h-auto relative flex flex-row items-center justify-center p-2">
                            <div className="items-center text-white bg-green-500 p-2 flex justify-center font-light mr-2 rounded-md">
                                05/04
                            </div>
                            <div className="h-auto relative flex flex-col p-2">
                                <div>
                                    Evento Acontecendo
                                </div>
                                <div>
                                    <small>O evento de lançamento começou! Chame seus... <a className="hover:text-blue-500 hover:underline" href="/" alt="Ver Mais">Ver Mais</a></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-auto relative flex flex-col items-center justify-center p-2 overflow-hidden">
                        <div className="h-auto relative flex flex-row items-center justify-center p-2">
                            <div className="items-center text-white bg-indigo-500 p-2 flex justify-center font-light mr-2 rounded-md">
                                05/04
                            </div>
                            <div className="h-auto relative flex flex-col p-2">
                                <div>
                                    Proximo evento
                                </div>
                                <div>
                                    <small>Depois que sairmos do beta um evento será marcado... <a className="hover:text-blue-500 hover:underline" href="/" alt="Ver Mais">Ver Mais</a></small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center p-1">
                        <a className="hover:text-blue-500 hover:underline" href="/">Mais Eventos</a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NewsHome
