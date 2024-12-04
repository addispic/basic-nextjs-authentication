import axios from "axios"
import { getPayload } from "@/app/lib/session"

export default async function GetUsername(){
    
    const payload = await getPayload()
    const response = await axios.get(`http://localhost:3000/api/user?_id=${payload?._id}`)
    return (
        <span>{response?.data?.username || response?.data?.email?.split("@")[0]}</span>
    )
}