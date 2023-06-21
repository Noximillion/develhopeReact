// Create a GithubUser component that fetches the data of the username passed as a prop, and renders some of the data within a div tag. The API to query is https://api.github.com/users/${username}.


import { useEffect, useState } from "react";

export function FetchGithubUser({username}) {

    const [data, setData] = useState('')
    
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setData(json)
        })
    }, [])
    
    return (
        <div>
            {data.name}
            <br />
            {data.login}
            <br />
            {data.id}
        </div>
    )
}