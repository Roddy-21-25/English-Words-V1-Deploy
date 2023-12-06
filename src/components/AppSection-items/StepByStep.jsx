// eslint-disable-next-line react/prop-types
function StepByStep({ title, step_Descripcion, step_Img }) {
    return (
        <>
            <div className="">
                <div className="stepByStep shadow-sm shadow-blue-500/30 hover:shadow-md hover:shadow-blue-500/40 rounded-lg 
                transform hover:scale-105 transition-transform cursor-pointer transition-colors duration-300 ease-in-out m-1">
                    <div className="m-5">
                        <h2 className="p-2 rounded-lg shadow-md shadow-blue-500/40 font-bold text-3xl bg-blue-500 text-white
                        ">{title}</h2>
                    </div>
                    <div className="grid justify-items-center">
                        <img className="stepByStep-img" src={step_Img} alt={`imagen referente al paso ${title}`} />
                    </div>
                    <div className="font-semibold ">
                        <blockquote>
                            <p className="px-3 py-4 text-blue-900">
                                {step_Descripcion}
                            </p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StepByStep