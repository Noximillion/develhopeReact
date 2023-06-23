import { useGetGithubUser } from "./UseGithubUser"

export function GetGithubUser({username}) {

    const {data} = useGetGithubUser({username})

    const array = []
    for (const key in data) {
        if(data[key]) {
            const value = data[key]

            array.push({key, value})
        }
    }

    const newArr = array.map(data => {
        const Obj = {};

        for (const key in data) {
            Obj[data.key] = data.value
        }

        return Obj
    })

    return (
        <div>
            {newArr.map((el, i) => {
                for(i = 0; i < newArr.length; i++) {
                    const value = Object.values(el);
                    return <li key={value + i}>{value}</li>
                }
            })}
        </div>
    )
}