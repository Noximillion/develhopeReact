// Add an index route to the GithubUserList route that shows the "Add a user and select it" message.


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
                <Route path="/GithubUserList" element={<FetchGithubUserList />} >
                    <Route index element={<h5>Add a user and select it</h5>}/>
                </Route>
            </Routes>
        </div>
    )
}