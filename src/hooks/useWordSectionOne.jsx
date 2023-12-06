import { useState } from 'react';

const useWordSectionOne = () => {
  // Valores por defecto
  const defaultState = {
    word: "Looking...",
    wordTranslated: "Buscando...",
    ipa: "ləʊ.dɪŋ",
    audioSRC: "https://api.dictionaryapi.dev/media/pronunciations/en/loading-au.mp3",
    definition: "This word is used to wait something.",
    example: "The word you are waiting for is being Searched..."
  };

  const [wordSectionOne, setWordSectionOne] = useState(defaultState);

  // Función para asignar nuevos valores y restablecer a los valores por defecto si es necesario
  const assignNewValuesOne = (newValues) => {
    setWordSectionOne({
      ...wordSectionOne,
      ...newValues
    });
  };

  return {
    wordSectionOne,
    assignNewValuesOne
  };
};

export default useWordSectionOne;
