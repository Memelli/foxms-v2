import React from 'react'

const Downloads = () => {
    return (
        <>  <div className="flex justify-center items-center">
            <div className="h-auto my-5 w-5/6 flex flex-col items-center justify-center self-center shadow-md">
                <div className="mt-5 text-5xl font-thin items-center">
                    Downloads
                </div>
                <div className="px-10 my-4 py-6 rounded shadow-md hover:shadow-xl bg-white w-4/5 mx-auto">
                    <div className="flex justify-between items-center">
                        <span className="font-light text-gray-600">Última versão: v1.2 | 27/03/2021</span>
                        
                    </div>
                    <div className="mt-2">
                        <a className="text-2xl text-gray-700 font-bold hover:text-gray-600" href="/">
                            Instalador completo
                        </a>
                        <p className="mt-2 text-gray-600">
                            Esse download possui um instalador da versão completa do FoxMS. [Client + WZ]
                        </p>
                    </div>
                    <div className="flex flex-row items-center text-center mt-4">
                        <a className="text-blue-600 hover:underline" href="/">Link Direto</a>
                        <a className="text-blue-600 hover:underline mr-2 ml-2" href="/">Mega.nz</a>
                        <a className="text-blue-600 hover:underline" href="/">Google Drive</a>
                    </div>
                </div>
                <div className="px-10 my-4 py-6 rounded shadow-md hover:shadow-xl bg-white w-4/5 mx-auto">
                    <div className="flex justify-between items-center">
                        <span className="font-light text-gray-600">Última versão: v2.4 | 26/03/2021</span>
                        
                    </div>
                    <div className="mt-2">
                        <a className="text-2xl text-gray-700 font-bold hover:text-gray-600" href="/">
                            Client
                        </a>
                        <p className="mt-2 text-gray-600">
                            Caso o seu FoxMS.exe tenha sido corrompido, efetue o download novamente.
                        </p>
                    </div>
                    <div className="flex flex-row text-center items-center mt-4">
                        <a className="text-blue-600 hover:underline" href="/">Link Direto</a>
                        <a className="text-blue-600 hover:underline mr-2 ml-2" href="/">Mega.nz</a>
                        <a className="text-blue-600 hover:underline" href="/">Google Drive</a>
                    </div>
                </div>
                <div className="mt-5 items-center justify-center text-center text-5xl font-thin">
                    Instruções de instalação
                </div>
                <div className="mt-5 items-center flex flex-col justify-center px-16 mb-12">
                    Depois de baixar o Instalador Completo, extraia ele para a pasta que deseja instalar o jogo. Em seguida, execute o Launcher.exe. Caso seja a sua primeira vez jogando, o launcher irá baixar os arquivos do jogo. Se você já for um jogador, o launcher vai verificar a versão de cada arquivo, e irá atualizar, caso seja necessário.
                    <small>Caso você ainda esteja enfrentando problemas, envie uma mensagem para o <a className="text-blue-600 hover:underline" href='/'>suporte</a>.</small>
                </div>
            </div>
            </div>
        </>
    )
}

export default Downloads
