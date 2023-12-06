import { useState } from "react";
import { VideoBtn } from "./VideoBtns";

// eslint-disable-next-line react/prop-types
export const SectionTwo = ({ videoSrc, word, transcriptVideo }) => {
    // Funcion para dar estilo a la palabra principal
    const highlightWord = (text, wordToHighlight) => {
        const regex = new RegExp(wordToHighlight, 'gi');
        return text.replace(regex, (match) => `<span class="highlight">${match}</span>`);
    };

    const [videosSrcList, setVideosSrcList] = useState(videoSrc)
    const [transcriptVideoList, setTranscriptVideo] = useState(transcriptVideo)
    const [indexVideos, setIndexVideos] = useState(0)

    const HandleButton = (text) => {
        if (text === "Next ↦" && indexVideos < videosSrcList.length - 1) {
            setIndexVideos(prevIndex => prevIndex + 1);
        } else if (text === "↤ Prev" && indexVideos > 0) {
            setIndexVideos(prevIndex => prevIndex - 1);
        }
    };

    return (
        <>
            <div className="shadow-md shadow-blue-500/25 p-4 my-6 rounded-lg">
                <div>
                    <h2 className="text-blue-600/90 hover:text-blue-600 transition-colors duration-300 
                        text-2xl text-center m-2 font-bold">
                        👂 Hear the word: <span className="text-blue-500/90">{word}</span> from a native speaker👂
                    </h2>
                </div>
                <div>
                    <iframe
                        src={videosSrcList[indexVideos]}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        className="rounded-lg w-full h-80 aspect-auto"
                    ></iframe>
                </div>
                <VideoBtn HandleButton={HandleButton} />
                <div className="text-blue-600/90 text-center m-2 mt-4 text-2xl font-semibold">
                    <div className="p-4 border border-blue-600/20 rounded-lg">
                        <div className="transcript" dangerouslySetInnerHTML={{ __html: highlightWord(transcriptVideoList[indexVideos], word) }} />
                    </div>
                </div>
            </div>
        </>
    )
}