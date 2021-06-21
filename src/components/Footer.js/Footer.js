import React from 'react'
import { FaDiscord, FaYoutube, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <div className="h-24 bg-black text-white opacity-90 space-between flex flew-row justify-center items-center">
                <div className="flex flex-col items-center mr-10">
                    Usuarios online: 0
                </div>
                <div className="flex font- flex-col items-center mr-10">
                    Todos os direitos reservados a FoxMS&copy;
                </div>
                <div className="flex flex-row items-center">
                    <FaDiscord className="text-3xl" />
                    <FaYoutube className="text-3xl ml-2 mr-2" />
                    <FaInstagram className="text-3xl" />
                </div>
            </div>
        </>
    )
}

export default Footer
