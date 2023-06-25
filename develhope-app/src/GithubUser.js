import { useParams } from "react-router-dom"
import { useGetGithubUser } from "./UseGithubUser"

export function GetGithubUser() {

    const { username } = useParams() 

    const {data, error, onRefresh} = useGetGithubUser(username)

    return (
        <div>
            {data && <h5>{data.login}<br/>{data.name}</h5>}
            {error && <h5>errore</h5>}
            <button onClick={onRefresh}>Refresh</button>
        </div>
    )
}