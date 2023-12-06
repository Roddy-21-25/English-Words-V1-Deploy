// eslint-disable-next-line react/prop-types
const ButtonSocialMedia = ({ openNewWindow, link, icon, titleBtn }) => {
    return (
        <>
            <button onClick={() => openNewWindow(link)}
        className="bg-white mx-1 sm:mx-5 p-2 sm:pt-2 sm:pb-2 rounded-lg text-blue-500 font-bold 
                            transform transition-transform hover:scale-105">
                <span className="mr-4"><ion-icon name={icon}></ion-icon></span>
                <span className="sm:text-xl text-lg">{titleBtn}</span>
            </button>
        </>
    )
}

export default ButtonSocialMedia;