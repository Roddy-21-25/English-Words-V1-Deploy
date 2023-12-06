/* eslint-disable react-hooks/exhaustive-deps */

// Secciones de las Vistas de AfterView
import { SectionOne } from "./SectionOne"
import { SectionThree } from "./SectionThree"
import { SectionTwo } from "./SectionTwo"

// Componente de carga
import LoadingComponent from "./LoadingComponent"

// Custom Hooks
import useWordSectionTwo from "../../hooks/useWordSectionTwo"
import useWordSectionOne from "../../hooks/useWordSectionOne"
import useWordSectionThree from "../../hooks/useWordSectionThree"

// Llamadas a las Apis
import { useDitc } from "../../services/AxiosDictionary"
import { useTranslator } from "../../services/AxiosTranslator"
import { useYoutube } from "../../services/AxiosYoutube"

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function AfterView() {
  // Para cargar el componente de Loading
  const [loading, setLoading] = useState(true);

  // para manejar el store del input que hace la llamada al api
  const manageInput = useSelector(state => state.manageInput)

  // Llamadas a las APIS
  const { dict } = useDitc({ wordSend: manageInput });
  const { text } = useTranslator({ wordSend: manageInput });
  const { videos } = useYoutube({ wordSend: manageInput });

  // Implementacion de los Customs Hooks para llenar los datos
  const { wordSectionOne, assignNewValuesOne } = useWordSectionOne();
  const { wordSectionTwo, assignNewValuesTwo } = useWordSectionTwo();
  const { wordSectionThree, assignNewValuesThree } = useWordSectionThree();

  //? Esto carga el componente de Loading
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      //? Indica que la carga ha terminado
      setLoading(false);
    }, 20000);
  }, [manageInput])

  //? Esto asigna los valores a SectionTwo y SectionThree
  useEffect(() => {
    const translationData = text.data?.resultado
    const dictionaryData = dict.data
    const videosData = videos.data?.resultados

    if (dictionaryData && dictionaryData.length > 0) {
      const worrdIpaArray = dictionaryData[0].phonetics.map((element) => ({
        text: element.text || "",
        audio: element.audio || "",
      }));

      const wordAudioSrcArray = dictionaryData[0].phonetics.map(element => element.audio).filter(Boolean);
      const selectedAudioSrc = wordAudioSrcArray.find(audioSrc => audioSrc.includes("us")) || wordAudioSrcArray.find(audioSrc => audioSrc.includes("uk")) || "";

      const wordDefinitions = [...dictionaryData[0].meanings[0].definitions]
        .sort((a, b) => b.definition.length - a.definition.length)
        .slice(0, 3)
        .map(element => element.definition)

      let wordExamplesArray = [...dictionaryData[0].meanings[0].definitions]
        .map(element => element.example)
        .filter(example => example !== undefined)

      let wordExamplesToShow = [];
      if (wordExamplesArray.length > 2) {
        wordExamplesToShow = wordExamplesArray;
      } else if (videosData) {
        wordExamplesToShow = videosData.map(element => element.titulo)
          .filter((titulo, index, array) => index === 0 || titulo.length !== array[index - 1].length);
      }

      let wordSynsArray = dictionaryData[0].meanings.flatMap((meaning) => meaning.synonyms)
      let wordAntsArray = dictionaryData[0].meanings.flatMap((meaning) => meaning.antonyms)

      if (wordSynsArray.length < 1) {
        wordSynsArray = [dictionaryData[0].word]
      }
      if (wordAntsArray.length < 1) {
        wordAntsArray = [dictionaryData[0].word]
      }

      assignNewValuesOne({
        word: dictionaryData[0].word,
        wordTranslated: translationData || "",
        ipa: worrdIpaArray.map(element => element.text).filter(element => element !== "").slice(0, 1)[0],
        audioSRC: selectedAudioSrc,
        definition: wordDefinitions,
        example: wordExamplesToShow.slice(-2),
      });

      assignNewValuesThree({
        word: dictionaryData[0].word,
        wordSyns: wordSynsArray,
        wordAnts: wordAntsArray,
        wordsExamples: wordExamplesToShow.slice(0, 6)
      })
    }
  }, [dict, text, videos]);

  //? Esto asigna los valores a SectionTwo de videos
  useEffect(() => {
    const videosData = videos.data?.resultados

    if (videosData) {
      assignNewValuesTwo({
        word: wordSectionOne.word,
        videoSrc: videosData.map(element => element.url),
        transcriptVideo: videosData.map(element => element.transcript)
      })
    }
  }, [videos])
  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 justify-items-center p-5">
          <SectionOne {...wordSectionOne} />
          <SectionTwo className="row-span-3" {...wordSectionTwo} />
          <SectionThree {...wordSectionThree} />
        </div>
      )}
    </>
  )
}

export default AfterView