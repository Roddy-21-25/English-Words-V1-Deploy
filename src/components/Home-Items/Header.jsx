import { useNavigate } from "react-router-dom"
import BtnInfo from "../../data/BtnInfo"
import { Link as ScrollLink } from 'react-scroll';
import ButtonHeader from "./ButtonHeader";
import SpanText from "./SpanText";

function Header() {
    const navigate = useNavigate();

    const ButtonNavigation = (e) => {
        if (e.target.textContent == 'Meet Us!') navigate('/about')
        if (e.target.textContent == 'Get Started!') navigate('/app/before')
    }

    return (
        <>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4 justify-items-center text-center mt-3 mb-3">
                    <div className="sm:col-span-2 sm:p-10 p-3 font-semibold">
                        <h1 className="sm:text-4xl text-blue-900 text-2xl sm:mb-4 leading-loose sm:leading-relaxed mb-4 ms:mb-0">
                            <SpanText classNameParam={"mr-2"}>🎓 Master English </SpanText>by discovering words: Expand your <SpanText classNameParam={"mr-2"}>📃 Vocabulary </SpanText> and improve your <SpanText>🗣️Pronunciation</SpanText>
                        </h1>
                        <h2 className="sm:text-2xl">
                            ⭐⭐⭐⭐⭐
                        </h2>
                        <blockquote className="p-3 rounded-r-lg my-4 text-blue-900/80 border-l-4 dark:border-blue-500 dark:bg-blue-50">
                            <p>
                                Unlock your linguistic potential and achieve fluency
                            </p>
                        </blockquote>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center mt-9">
                            {
                                BtnInfo.map((info, i) => (
                                    <ScrollLink key={i} to="top" smooth={true} duration={500}>
                                        <ButtonHeader ButtonNavigation={ButtonNavigation} {...info}></ButtonHeader>
                                    </ScrollLink>
                                ))
                            }
                        </div>
                    </div>
                    <div className="sm:col-span-2 grid justify-items-center">
                        <img src="./src/assets/header-assets/header-img.png" className="header-img" alt="imagen del header" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header