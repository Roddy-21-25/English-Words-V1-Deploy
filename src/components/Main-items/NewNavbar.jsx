import { useState } from "react"
import { NavLink } from "react-router-dom";

import { RoutesList } from "../../data/RoutesList"

import { useDispatch } from 'react-redux';
import { changeView } from '../../redux/Sllices/ManageViewSlice';

function NewNavbar() {
    const [isClick, setIsClick] = useState(false);

    const dispatch = useDispatch();
    const handleEnglishBtn = (routes) => {
        if (routes.name === "Learn English") {
            dispatch(changeView(false))
        }
    }

    const toggleNavbar = () => {
        setIsClick(!isClick)
    }

    return (
        <>
            <div className="bg-blue-500 p-1">
                <p className="text-center p-1 font-semibold text-blue-950">
                    ✨ The leading <span className="text-neutral-50 font-bold hover:underline ">English Learning App</span> on the market ✨
                </p>
            </div>
            <nav className="bg-white shadow shadow-blue-500/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <NavLink to='/'>
                                    <img className={`mx-auto`}
                                        src="/src/assets/Logo.png" alt="Logo de la pagina" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center space-x-4">
                                {RoutesList.map((routes, i) => (
                                    <NavLink key={i} className="navbar-link-enpoint text-blue-900 font-bold 
                                    px-4 cursor-pointer transition ease-in-out duration-300 hover:text-blue-600"
                                        to={routes.link} onClick={() => handleEnglishBtn(routes)}>
                                        <span className="svg pr-2">{routes.svg}</span>{routes.name}
                                        {open && <hr className="m-3 sm:hidden bg-blue-500" />}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md 
                                 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={toggleNavbar}>
                                {isClick ? (
                                    <svg className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor" >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isClick && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {RoutesList.map((routes, i) => (
                                <NavLink key={i} className="navbar-link-enpoint text-blue-950/80 font-bold block border rounded-lg border-blue-600/30
                                    px-4 py-2 cursor-pointer transition ease-in-out duration-300 hover:text-blue-600"
                                    to={routes.link} onClick={() => handleEnglishBtn(routes)}>
                                    <span className="svg pr-2">{routes.svg}</span>{routes.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default NewNavbar