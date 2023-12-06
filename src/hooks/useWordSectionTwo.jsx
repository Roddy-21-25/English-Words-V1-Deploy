import { useState } from 'react';

const useWordSectionTwo = () => {
  // Valores por defecto
  const defaultState = {
    videoSrc: ["https://www.youtube.com/embed/t-KloSEuQrU"],
    transcriptVideo: ["If this content does not load... so, we do not have this word on our database, so we will add it, meanwhile search another word."],
    word: "Looking..."
  };

  const [wordSectionTwo, setWordSectionTwo] = useState(defaultState);

  // Función para asignar nuevos valores y restablecer a los valores por defecto si es necesario
  const assignNewValuesTwo = (newValues) => {
    setWordSectionTwo({
      ...wordSectionTwo,
      ...newValues
    });
  };

  return {
    wordSectionTwo,
    assignNewValuesTwo
  };
};

export default useWordSectionTwo;
