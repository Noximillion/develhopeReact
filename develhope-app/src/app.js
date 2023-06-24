// Add a new Route to the /counter path that renders the Counter component

import { Route, Routes } from 'react-router-dom'
import { HookCounter } from "./counter";

export function App() {

    return (
        <div>
            <Routes>
                <Route path="/counter" element={<HookCounter />} />
            </Routes>
        </div>
    )
}