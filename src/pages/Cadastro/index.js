import React from 'react'

const Cadastro = () => {
    return (
        <>
            
            <div class="container max-w-sm mx-auto h-screen flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Cadastro</h1>
                    <input
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Usuario" />

                    <input
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Senha" />
                    <input
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirmar Senha" />

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none my-1"
                    >Criar conta</button>
                </div>
                </div>
        </>
            )
}

            export default Cadastro
