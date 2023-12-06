import { useState, useEffect } from "react";
import { DictApi } from "./Axios";

export const useDitc = ({ wordSend }) => {
  const [dict, setDict] = useState([]);

  const getDitc = async (wordToSend) => {
    try {
      if (wordToSend.trim() === "") return undefined;
      const resp = await DictApi.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSend}`
      );
      setDict(resp);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDitc(wordSend);
  }, [wordSend]);

  return {
    dict
  };
};
