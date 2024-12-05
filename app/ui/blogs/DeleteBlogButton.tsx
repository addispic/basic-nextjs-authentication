// lib
// session
import { getPayload } from "@/app/lib/session";
// icons
import { PiTrashLight } from "react-icons/pi";
// ui
// confirm delete
import ConfirmDeleteBlog from "./ConfirmDeleteBlog";
export default async function DeleteBlogButton({author, _id}: {author: string; _id: string}) {
    const payload = await getPayload() 
    if(payload?._id !== author) return null
  return (
    <>
      <ConfirmDeleteBlog _id={_id}/>
    </>
  );
}
