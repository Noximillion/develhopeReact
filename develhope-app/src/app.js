// Add three Links within the main App component and use them to navigate to all three routes.

import { Route, Routes } from 'react-router-dom'
import { HookCardDetails } from './CardDetails'
import { Welcome } from './welcome'
import { HookCounter } from './counter'
import { Login } from './HookLogin'

export function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome />}></Route>
                <Route path="/CardDetails" element={<HookCardDetails />}></Route>
                <Route path="/counter" element={<HookCounter />}></Route>
                <Route path="/HookLogin" element={<Login />}></Route>
            </Routes>
        </div>
    )
}