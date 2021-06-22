import React from 'react'
import { Link } from 'react-router-dom'
import { FaCannabis } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className="z-30 flex justify-between items-center h-16 bg-white text-black relative shadow-md" role="navigation">
            <Link to='/' className="flex drop-shadow-lg drop-shadow-xl pl-8 text-3xl font-serif">
                FoxMS<span className="text-blue-500"><FaCannabis className="ml-1"/></span>
            </Link>
            <div className="px-4 cursor-pointer md:hidden">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link className="p-4 hover:text-blue-500" to="/">Inicio</Link>
                <Link className="p-4 hover:text-blue-500" to="/signup">Cadastro</Link>
                <Link className="p-4 hover:text-blue-500" to="/download">Download</Link>
                <Link className="p-4 hover:text-blue-500" to="/rankings">Ranking</Link>
                <Link className="p-4 hover:text-blue-500" to="/suporte">Suporte</Link>
                <Link classname="p-4 hover:text-blue-500" to="/login"><button className="bg-blue-500 hover:bg-blue-600 py-1.5 px-5 rounded text-white">Login</button></Link>
            </div>

        </nav>
    )
}

export default Navbar
