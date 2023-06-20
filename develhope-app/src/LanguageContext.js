// Create a LanguageContext and wrap a DisplayLanguage component within its provider. Add a select tag to the component containing the DisplayLanguage component that allows the user to select the language, and pass it as a value to the Provider.

import {createContext} from "react";

export const LanguageContext = createContext('eng')