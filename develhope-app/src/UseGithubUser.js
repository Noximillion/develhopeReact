// Modify the useGithubUser hook so that, if the username is null, no request is made.

import useSWR from 'swr' 

const fetcher = url => fetch(url).then(res => res.json())


export function useGetGithubUser(username) {

    const { data, error } = useSWR(username && `https://api.github.com/users/${username}`, fetcher)

    return {
        data: data, 
        error: error,
    }
}