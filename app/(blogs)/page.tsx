import {redirect} from 'next/navigation'
// lib
import { getPayload } from "../lib/session";
// ui
import NewBlogForm from '../ui/blogs/NewBlogForm';
import SingleBlog from '../ui/blogs/SingleBlog';

export default async function Home() {
  const response = await getPayload() 
  if(!response?._id) redirect("/login")
  return <div className="flex-1 flex flex-col overflow-hidden">
    {/* blogs list */}
    <div className="flex-1 py-1.5 px-1.5  overflow-y-auto custom-scroll-bar" >
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
      <SingleBlog />
    </div>
    {/* add new blog form */}
    <NewBlogForm />
  </div>;
}
