import {redirect} from 'next/navigation'
import axios from 'axios';
// lib
import { getPayload } from "../lib/session";
// ui
import NewBlogForm from '../ui/blogs/NewBlogForm';
import SingleBlog from '../ui/blogs/SingleBlog';

export default async function Home() {
  const payload = await getPayload() 
  if (!payload?._id) redirect("/login");
  const response = await axios.get("http://localhost:3000/api/blogs")
  console.log(response.data)
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
