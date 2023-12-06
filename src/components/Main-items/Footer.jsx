import { NavLink } from "react-router-dom"
import { Link as ScrollLink } from 'react-scroll';
import { footersLink } from "../../data/footersLink";

import { useDispatch } from 'react-redux';
import { changeView } from '../../redux/Sllices/ManageViewSlice';

function Footer() {

  // Logica para el error de navegar a before
  const dispatch = useDispatch();
  const handleEnglishBtn = (footer) => {
    if (footer.title === "Learn English") {
      dispatch(changeView(false))
    }
  }

  return (
    <>
      <footer className="bg-blue-700 mt-10 ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
          <div className="sm:flex sm:items-center sm:justify-between mb-8 ">
            <div className="flex items-center mb-4 sm:mb-0">
              {/* Si necesito agregar algo en esta seccion, hacer un JSON. */}
              <ScrollLink to="top" smooth={true} duration={500}>
                <NavLink to='/'>
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    <ion-icon name="library-outline"></ion-icon>
                    <span className="ml-3">English Words</span>
                  </span>
                </NavLink>
              </ScrollLink>
            </div>
            <ul className="flex flex-wrap items-center mb-6 text-lg lg:text-sm font-medium sm:mb-0 text-white ">
              {
                footersLink.map((footer, i) => (
                  <li key={i}>
                    <ScrollLink to="top" smooth={true} duration={500}>
                      <NavLink to={footer.link} onClick={() => handleEnglishBtn(footer)} className="mr-4 hover:underline hover:text-white md:mr-6">{footer.title}</NavLink>
                    </ScrollLink>
                  </li>
                ))
              }
            </ul>
          </div>
          <span className="block text-lg lg:text-sm sm:text-center text-white">© 2024
            <ScrollLink to="top" smooth={true} duration={500}>
              <NavLink to='/' className="hover:underline hover:text-white"> English Words</NavLink>
            </ScrollLink>. All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  )
}

export default Footer