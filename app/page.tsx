import { getPayload } from "./lib/session";
import {redirect} from 'next/navigation'
export default async function Home() {
  const response = await getPayload() 
  if(!response?._id) redirect("/login")
  return <div>Home</div>;
}
