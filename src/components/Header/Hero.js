import React from 'react'
import { Link } from 'react-router-dom'
import Video from '../../images/video.mp4'

const Hero = () => {
    return (
        <div className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
            <div className="mt-60 z-30 h-screen flex flex-col justify-center items-center">
{/*                 <h1 className="drop-shadow-md text-white lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
                    FoxMS
                </h1> */}
                <Link to="/" className="py-6 px-10 bg-blue-800 rounded-full text-white text-3xl hover:bg-blue-500 transition duration-300 ease-in-out flex items-center animate-bounce">
                    JOGUE AGORA!
                    <svg className="w-6 h-6 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </Link>
            </div>
            <video autoPlay loop muted className="absolute opacity-70 z-10 w-auto min-w-full min-h-full max-w-none">
                <source src={Video} type="video/mp4" />
                Seu navegador não suporte este tipo de conteúdo.
            </video>
        </div>
    )
}

export default Hero
