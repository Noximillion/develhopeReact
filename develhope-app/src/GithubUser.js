import { useGetGithubUser } from "./UseGithubUser"

export function GetGithubUser({username}) {

    const {data, loading, error} = useGetGithubUser(username)

    return (
        <div>
            {loading && <h5>Loading...</h5>}
            {data && <h5>{data.login}</h5>}
            {error && <h5>errore</h5>}
        </div>
    )
}