// Create a GithubUserList component that maintains an array of usernames, showing a GithubUser component for each username entered. The usernames should be added to the array using an input field and a button.

import { useEffect, useState } from "react";
import { GetGithubUser } from "./GithubUser";

export function FetchGithubUserList() {

    const [usernames, setUsernames] = useState([])
    const [user, setUser] = useState('')

    function handleInputChange(event) {
        setUser(event.target.value)
    }

    function addToList() {
        setUsernames([...usernames, user])
    }

    // useEffect(() => {
    //     console.log(user)
    // })

    // useEffect(() => {
    //     console.log(usernames)
    // }, [usernames])

    return (
        <div>
            <input name='username' type='text' value={user} onChange={handleInputChange} />
            <button onClick={addToList}>add user to list</button>
            <h5>
                {usernames.map((el) => {
                    // <GetGithubUser username={el}/>
                        fetch(`https://api.github.com/users/${el}`)
                        .then(res => res.json())
                        .then(json => <li>{json}</li>)
                })}
            </h5>
        </div>
    )
}