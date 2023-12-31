import { useState, useEffect } from "react";
import { YourubeApi } from "./Axios";

export const useYoutube = ({ wordSend }) => {
  const [videos, setVideos] = useState([]);

  const getVideos = async (wordToSend) => {
    try {
      if (wordToSend.trim() === "") return undefined;
      
      const resp = await YourubeApi.get(
        //? para Produccion
        `https://appdeinglesenglishwordssecond.bsite.net/api/Bv4?palabra_clave=${wordToSend}`
        // `http://englishwordsappweb.somee.com/api/Bv4?palabra_clave=${wordToSend}`
      );
      setVideos(resp);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getVideos(wordSend);
      console.log("Api de youtube Funcionando");
    }, 3000);
  }, [wordSend]);

  return {
    videos,
  };
};
