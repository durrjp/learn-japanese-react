import React, {createContext, useEffect, useState} from "react"


interface ITranslateContext {
    englishText: string;
    japaneseText: string;
    translateEnglish: () => void;
} 

export const TranslateContext = createContext<Partial<ITranslateContext>>({});

export default function TranslateProvider() {
    const [englishText, setEnglishText] = useState();
    const [japaneseText, setJapaneseText] = useState();

    // async function translateEnglish(englishText:string) {
    //     return japaneseTextResponse
    // } 

    // useEffect(() => {
    //     const japaneseTextResponse = await fetch("https://libretranslate.com/translate", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             q: "",
    //             source: "en",
    //             target: "ja",
    //             format: "text"
    //         }),
    //         headers: { "Content-Type": "application/json" }
    //     });

    // })



    return (
        <TranslateContext.Provider
            value={{
                englishText,
                japaneseText,
            }}
        >
        </TranslateContext.Provider>
    )
}