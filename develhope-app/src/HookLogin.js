import { useControlledForm } from "./useControlledForm"

export function Login() {

    const{ handleAll, event } = useControlledForm({})

    // const [info, setInfo] = useState({
    //     username: '',
    //     password: ''
    // })

    // function handleInputChange(event) {
    //     const{name, value} = event.target

    //     setInfo(info => {return {...info, [name]: value}})
    // }

    // function checkInfo() {
    //     const button = document.getElementById('buttonLog')

    //     if(info.username && info.password) {
    //         button.disabled = false
    //     } else {
    //         button.disabled = true
    //     }
    // }

    return (
        <form>
            <input onChange={handleAll} value={event} name='username' />
            <input onChange={handleAll} value={event} name='password' type='password' />
            {/* <button onChange={handleInputChange} id='buttonLog' disabled >login</button> */}
        </form>
    )
}