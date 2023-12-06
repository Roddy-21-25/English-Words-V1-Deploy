import { useState, useEffect } from "react";
import { TranslatorApi } from "./Axios";

export const useTranslatorNavbar = ({ wordSend, languaje }) => {
  // eslint-disable-next-line no-unused-vars
  const [text, setText] = useState("");

  const getText = async (wordToSend, languaje) => {
    try {
      if (wordToSend.trim() === "") return undefined;

      //? test
      // const resp = await TranslatorApi.get(
      //   `http://englishwordsappweb.somee.com/api/Bv4Translator?text=${wordToSend}&src=${languaje}`
      // );

      const resp = await TranslatorApi.get(
        `/api/translator?text=${wordToSend}&src=${languaje}`
      );

      setText(resp);
      return resp;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getText(wordSend, languaje);
    console.log("traductor funcionando");
  }, [wordSend, languaje]);

  return {
    getText,
  };
};
