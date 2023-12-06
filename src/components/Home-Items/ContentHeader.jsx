// eslint-disable-next-line react/prop-types
const ContentHeader = ({ title, text, img_src, span }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center mb-5">
            <div className="">
                <h2 className="text-center sm:text-3xl text-2xl m-5 font-bold text-blue-500">{title}<span className="underline text-blue-600">{span}</span></h2>
                <div className="bg-blue-100/50 p-5 rounded-r-lg shadow-md shadow-blue-200/60
                 border-r-4 border-blue-500 mr-7 mb-7 lg:mb-0 lg:mr-0">
                    <p className="m-5 text-lg font-semibold text-blue-900">
                        {text}
                    </p>
                </div>
            </div>
            <div className="grid justify-items-center">
                <img src={img_src} alt="img referente al contennido" className="block-content-img" />
            </div>
        </div>
    )
}

export default ContentHeader