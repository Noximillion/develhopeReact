// Modify the useGithubUser custom hook from to use the useSWR hook to fetch the data of a Github user.

import { useEffect, useState } from "react"
import useSWR from 'swr' 

const fetcher = url => fetch(url).then(res => res.json())


export function useGetGithubUser(username) {

    const { data, error } = useSWR(`https://api.github.com/users/${username}`, fetcher)

    // const [data, setData] = useState('')
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)
    
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/${username}`)
    //     .then(res => {
    //         if(res.status !== 200) {
    //             setError(new Error('costui non esiste'))
    //         } 
            
    //         return res.json()
    //     })
    //     .then(json => {
    //         setData(json)
    //         setLoading(false)
    //     })
    //     .catch(error => {
    //         setError(error)
    //     })
    // }, [username])

    return {
        data: data, 
        error: error,
        // loading: loading,
    }
}