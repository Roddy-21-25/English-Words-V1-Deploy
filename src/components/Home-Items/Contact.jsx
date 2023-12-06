import { socialMediaInfo } from "../../data/SocialMediaInfo";
import ButtonSocialMedia from "./ButtonSocialMedia";

/* eslint-disable react/no-unescaped-entities */
function Contact() {
    const openNewWindow = (link) => {
        window.open(link, '_blank');
    };
    return (
        <>
            <div>
                <div className="grid grid-cols-1 ">
                    <div className="bg-blue-600 m-5 p-5 rounded-lg border-2 border-white shadow-md shadow-blue-600/60">
                        <div className="text-center sm:text-5xl text-3xl font-bold text-white">
                            <h2>📥 Contact Me 📥</h2>
                        </div>
                        <div className="mb-8 lg:mb-14 mt-8 text-center text-white font-semibold text-lg bg-blue-200/10 p-2 rounded-lg
                                        border-x-4 border-white/50">
                            <h2>⭐ " Together, we will build the world's next leading app " ⭐</h2>
                        </div>
                        <div className="grid grid-cols-3 justify-items-stretch">
                            {socialMediaInfo.map((info, i) => (
                                <ButtonSocialMedia key={i} {...info} openNewWindow={openNewWindow} ></ButtonSocialMedia>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact