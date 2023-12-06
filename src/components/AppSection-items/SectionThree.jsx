/* eslint-disable react/prop-types */
import { SynonymsList, AntonymList } from "./SynsAndAntsComponent"
// eslint-disable-next-line react/prop-types
export const SectionThree = ({ wordSyns, wordAnts, wordsExamples, word }) => {

    return (
        <>
            <div className="p-2 sm:p-4 my-6 sm:col-span-2">
                <div className="grid sm:grid-cols-2 gap-3 md:gap-5">
                    {/* Sinonimos */}
                    <div className="shadow-md shadow-blue-500/25 rounded-lg p-1">
                        <div className="">
                            <h2 className="font-bold text-center my-2 text-blue-600/90
                            hover:text-blue-600 transition-colors duration-300 sm:text-xl">
                                📘 Synonyms 📘
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3">
                                {wordSyns.map((wordGroup, index) => (
                                    <SynonymsList key={index} synonyms={wordGroup} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Antonimos */}
                    <div className="shadow-md shadow-blue-500/25 rounded-lg p-1">
                        <h2 className="font-bold text-center my-2 text-blue-600/90
                        hover:text-blue-600 transition-colors duration-300 sm:text-xl">
                            📕 Antonyms 📕
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            {wordAnts.map((wordGroup, index) => (
                                <AntonymList key={index} antonym={wordGroup} />
                            ))}
                        </div>
                    </div>

                    <div className="col-span-2 text-center text-lg sm:text-xl md:text-3xl font-bold mb-2 mt-4 
                                    text-blue-600/90">
                        <h2>
                            <span>⭐ Examples to Inspire You about the Word: </span>
                            <span className="text-blue-600/70">{word} ⭐</span>
                        </h2>
                    </div>

                    <div className="col-span-2 text-start text-blue-600/90 grid grid-cols-2 gap-2 
                    shadow-md shadow-blue-500/25 p-3 rounded-lg text-lg font-semibold">
                        {
                            wordsExamples.map((ex, i) => (
                                <div key={i} className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-1 pl-5 mb-2">
                                    <span className="">{ex}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}