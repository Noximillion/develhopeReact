import React from "react";
import { LanguageContext } from "./LanguageContext";

const languages = {
  eng: {
    greetMe: 'hi and '
  },
  ita: {
    greetMe: 'ehi '
  },
}


export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(language) => {
            return (
              <div>
                <p>{languages[language].greetMe} welcome, {this.props.name}</p>
              </div>
            )
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}