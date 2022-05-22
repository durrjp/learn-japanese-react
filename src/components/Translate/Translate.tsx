import React, { useContext } from "react"
import { TranslateContext } from "../../providers/TranslateProvider"
import "./Translate.css"


export default function Translate() {
    const {englishText, japaneseText, translateEnglish} = useContext(TranslateContext)


    return (
        <div>
            {englishText}
            {japaneseText}
        </div>
    )
}