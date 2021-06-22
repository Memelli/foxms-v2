import React from 'react'

const Cadastro = () => {
    return (
        <>

            <div className="container rounded mx-auto h-auto shadow-md my-10 w-5/6 flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 flex justify-center flex-col items-center text-black w-full">
                    <h1 className="mb-8 text-5xl font-thin text-center">Cadastro</h1>
                    <input
                        type="text"
                        className="block border border-grey-light w-1/2 p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Usuario"
                        required />
                        
                    <input
                        type="text"
                        className="block border border-grey-light w-1/2 p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input
                        type="password"
                        className="block border border-grey-light w-1/2 p-3 rounded mb-4"
                        name="password"
                        placeholder="Senha" />
                    <input
                        type="password"
                        className="block border border-grey-light w-1/2 p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirmar Senha" />

                    <button
                        type="submit"
                        className="text-center py-3 rounded w-1/2 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none my-1"
                    >Criar conta</button>
                    <small>Ao criar uma conta, você está automaticamente aceitando os nossos <a href='/' className="text-blue-600 hover:underline">termos de uso.</a></small>
                </div>
            </div>
        </>
    )
}

export default Cadastro
