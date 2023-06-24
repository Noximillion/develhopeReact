// Add a new Route to the users/:username path that renders a ShowGithubUser component that receives the username as a path parameter and renders the GithubUser component by passing it the received username.

import { Route, Routes } from 'react-router-dom'
import { GetGithubUser } from './GithubUser';

export function App() {

    return (
        <div>
            <Routes>
                <Route path="/users/:username" element={<GetGithubUser />} />
            </Routes>
        </div>
    )
}