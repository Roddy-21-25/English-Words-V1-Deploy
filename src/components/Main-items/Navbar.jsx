import { useState } from "react"
import { NavLink } from "react-router-dom"
import { RoutesList } from "../../data/RoutesList"

import { useDispatch } from 'react-redux';
import { changeView } from '../../redux/Sllices/ManageViewSlice';


function Navbar() {

    // Logica para el error de navegar a before
    const dispatch = useDispatch();
    const handleEnglishBtn = (routes) => {
        if (routes.name === "Learn English") {
            dispatch(changeView(false))
        }
    }

    // State para controlar el boton del Navbar
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className="bg-blue-600 p-1">
                <p className="text-center p-1 font-semibold text-blue-950">
                    ✨ The leading <span className="text-neutral-50 font-bold hover:underline ">English Learning App</span> on the market ✨
                </p>
            </div>

            <div className="shadow-lg shadow-blue-100/50 ">
                <div onClick={() => setOpen(!open)} className={`text-4xl text-center cursor-pointer md:hidden p-2 ${open ? 'text-blue-600' : ''}`}>
                    <ion-icon name={open ? 'close-circle-outline' : 'menu-outline'}></ion-icon>
                </div>

                <div className={`container mx-auto text-center font-bold sm:p-4 w-screen sm:h-18 transition-all duration-300 ease-in ${open ? 'h-25' : 'hidden sm:block'}`}>
                    <div
                        className={`navbar-link transition-all duration-300 ease-in
                        pt-1 flex sm:items-center sm:justify-evenly flex-col md:flex-row ${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
                        <div className="">
                            <NavLink to='/'>
                                <img className={`mx-auto ${open ? 'mb-6 sm:mb-0 cursor-pointer' : ''}`} src="/src/assets/Logo.png" alt="Logo de la pagina" />
                            </NavLink>
                        </div>

                        <div>
                            {RoutesList.map((routes, i) => (
                                <NavLink key={i} className="navbar-link-enpoint text-blue-950/80
                                    px-4 cursor-pointer transition ease-in-out duration-300 hover:text-blue-600"
                                    to={routes.link} onClick={() => handleEnglishBtn(routes)}>
                                    <span className="svg pr-2">{routes.svg}</span>{routes.name}
                                    {open && <hr className="m-3 sm:hidden bg-blue-500" />}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Navbar

