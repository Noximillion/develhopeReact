import React from "react";
import { LanguageContext } from "./LanguageContext";

const languages = {
    eng: {
        languageChoice: 'you chose '
    },
    ita: {
        languageChoice: 'hai scelto '
    },
}

export class DisplayLanguage extends React.Component {
    render() {
        return (
            <LanguageContext.Consumer>
                {(language) => {
                    return (
                        <h1>
                            {languages[language].languageChoice} {language}
                        </h1>
                    )
                }}
            </LanguageContext.Consumer>
        )
    }
}