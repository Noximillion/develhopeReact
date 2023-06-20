import React from "react";
import { LanguageContext } from "./LanguageContext";

export class App extends React.Component {


    state = {
        language: 'en'
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    render() {
        return (
            <LanguageContext.Provider>
                <select value={this.state.language} onChange={this.handleLanguageChange}>
                    <option value='en'>eng</option>
                    <option value='it'>ita</option>
                </select>
            </LanguageContext.Provider>
        )
    }
}