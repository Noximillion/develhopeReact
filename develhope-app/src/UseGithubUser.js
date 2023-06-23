// Extract the logic to fetch a Github user's data from the GithubUser component into a custom hook called useGithubUser.

import { useEffect, useState } from "react"

export function useGetGithubUser({ username }) {

    const [data, setData] = useState('')
    
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(json => setData(json))
    }, [data])

    return {
        data: data,
    }
}