import React from "react";
import { LanguageContext } from "./LanguageContext";

export class DisplayLanguage extends React.Component() {
    render() {
        return(
            <LanguageContext.Provider value={this.state.language}>
                <select>
                    <option value='ita'>ITA</option>
                    <option value='eng'>ENG</option>
                    <option value='fra'>FRA</option>
                </select>
            </LanguageContext.Provider>
        )
    }
}