import { Route, Routes } from 'react-router-dom'
import { HookCardDetails } from './CardDetails'
import { Welcome } from './welcome'
import { HookCounter } from './counter'
import { Login } from './HookLogin'
import { NotFound } from './NotFound'
import { FetchGithubUserList } from './GithubUserList'
import { GetGithubUser } from './GithubUser'

export function App() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome />}/>
                <Route path="/CardDetails" element={ <HookCardDetails /> } />
                <Route path="/users/:username" element={<GetGithubUser />}/>
                <Route path="/counter" element={<HookCounter />} />
                <Route path="/HookLogin" element={<Login />} />
                <Route path="/*" element={<NotFound/>} />
                <Route path="/GithubUserList" element={<FetchGithubUserList />} />
            </Routes>
        </div>
    )
}