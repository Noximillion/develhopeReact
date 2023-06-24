import { Route, Routes } from 'react-router-dom'
import { HookCardDetails } from './CardDetails'
import { Welcome } from './welcome'
import { HookCounter } from './counter'
import { Login } from './HookLogin'
import { NotFound } from './NotFound'

export function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome />}></Route>
                <Route path="/CardDetails" element={<HookCardDetails />}></Route>
                <Route path="/counter" element={<HookCounter />}></Route>
                <Route path="/HookLogin" element={<Login />}></Route>
                <Route path="/*" element={<NotFound/>}></Route>
            </Routes>
        </div>
    )
}