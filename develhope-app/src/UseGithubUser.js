import { useEffect, useState } from "react"

export function useGetGithubUser(username) {

    const [data, setData] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(res => {
            if(res.status !== 200) {
                setError(new Error('costui non esiste'))
            } 
            
            return res.json()
        })
        .then(json => {
            setData(json)
            setLoading(false)
        })
        .catch(error => {
            setError(error)
        })
    }, [username])

    return {
        data: data, 
        error: error,
        loading: loading,
    }
}