// Rewrite the DisplayLanguage component from Context 02 to be a function component, and access the LanguageContext through the useContext hook.


import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function DisplayLanguage() {

    const language = useContext(LanguageContext)

    return (
        <h3>Current Language: {language}</h3>
    )
}