import ConfirmDeleteComment from "./ConfirmDeleteComment";
// lib
import { getPayload } from "@/app/lib/session";
export default async function DeleteCommentButton({author,_id, blog}: {author: string;_id: string; blog: string}) {
    const payload = await getPayload() 
    if(payload?._id !== author) return null
  return (
    <ConfirmDeleteComment _id={_id} blog={blog}/>
  )
}
