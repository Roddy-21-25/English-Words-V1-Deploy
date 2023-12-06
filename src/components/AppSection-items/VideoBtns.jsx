import btnVideoInfo from "../../data/btnVideoInfo"

// eslint-disable-next-line react/prop-types
export const VideoBtn = ({ HandleButton }) => {
    return (
        <>
            <div className="flex justify-center">
                <div className=" inline-flex mt-3">
                    {
                        btnVideoInfo.map((text, i) => (
                            <button
                                onClick={() => {
                                    HandleButton(text.text);
                                }}
                                key={i}
                                className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 
                            border-b-4 border-blue-700 hover:border-blue-500 
                            ${text.text === "↤ Prev" ? "rounded-l-lg" : " "} ${text.text === "Next ↦" ? "rounded-r-lg" : " "}`}>
                                {text.text}
                            </button>
                        ))
                    }
                </div>
            </div>
        </>
    )
}