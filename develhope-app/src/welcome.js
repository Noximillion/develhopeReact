import React from "react";
import { DisplayLanguage } from "./HookDisplayLanguage";

export function Welcome({language}) {

  return (
    <div>
      <DisplayLanguage />
      <p>{`${language}`=== 'eng' ? 'hello' : 'buongiorno'}</p>
    </div>
  );
}
