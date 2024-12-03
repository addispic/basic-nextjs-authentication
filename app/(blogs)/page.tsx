import {redirect} from 'next/navigation'
// lib
import { getPayload } from "../lib/session";
// ui
import NewBlogForm from '../ui/blogs/NewBlogForm';
import SingleBlog from '../ui/blogs/SingleBlog';

export default async function Home() {
  const response = await getPayload() 
  if(!response?._id) redirect("/login")
  return <div className="flex-1 flex flex-col">
    {/* blogs list */}
    <div className="flex-1">
      <SingleBlog />
    </div>
    {/* add new blog form */}
    <NewBlogForm />
  </div>;
}
