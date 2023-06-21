import React from "react";

import { ClickCounter } from "./HookClickCounter";

export function App() {

    const onChangeCounter = (val) => {
        console.log('counter is', val)
    }

    return (
        <div>
            <ClickCounter funcToCall={onChangeCounter}/>
        </div>
    )
}