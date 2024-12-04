import axios from "axios"
export default async function GetUsernameWithID({_id}: {_id: string}){
    const response = await axios.get(`http://localhost:3000/api/user?_id=${_id}`)
    return (
        <span>{response?.data?.username || response?.data?.email?.split("@")[0]}</span>
    )
}