import { useState, useEffect } from "react";
import { TranslatorApi } from "./Axios";

export const useTranslator = ({ wordSend }) => {
  const [text, setText] = useState("");

  const getText = async (wordToSend, languaje="es") => {
    try {
      if (wordToSend.trim() === "") return undefined;
      const resp = await TranslatorApi.get(
        `http://englishwordsappweb.somee.com/api/Bv4Translator?text=${wordToSend}&src=${languaje}`
      );
      setText(resp);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getText(wordSend);
    console.log("traductor funcionando")
  }, [wordSend]);

  return {
    text
  };
};
