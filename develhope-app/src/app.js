import React, { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { Welcome } from "./welcome";

export function App() {

    const [language, setLanguage] = useState('eng')

    function handleChangeLanguage(event) {
        setLanguage(event.target.value)
    }

    return (
        <div>
            <select value={language} onChange={handleChangeLanguage}>
                <option value='eng'>eng</option>
                <option value='ita'>ita</option>
            </select>
            <LanguageContext.Provider value={language}>
                <Welcome language={language}/>
            </LanguageContext.Provider>
        </div>
    )
}