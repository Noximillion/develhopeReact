import { useEffect, useState } from "react"

export function GetGithubUser({username}) {

    const [data, setData] = useState('')
    
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(json => setData(json))
    }, [])
    
    return (
        <div>
            {data.name}
        </div>
    )
}