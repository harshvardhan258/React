import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Convert({ language, text }) {
  const [translate, setTranslate] = useState("");
  const [debounce, setDebounce] = useState(text);

  useEffect(() => {
    const termId = setTimeout(() => {
      setDebounce(text);
    }, 1000);
    return () => {
      clearTimeout(termId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debounce,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslate(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debounce]);
  return (
    <div>
      <h1 className="ui header">{translate}</h1>
    </div>
  );
}
