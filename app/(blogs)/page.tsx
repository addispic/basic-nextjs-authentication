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
  return <div className="flex-1 flex flex-col overflow-hidden">
    {/* blogs list */}
    <div className="flex-1 py-1.5 px-1.5  overflow-y-auto custom-scroll-bar" >
      {
        response?.data?.blogs?.length > 0 
        ?
        <>

        {
          response?.data?.blogs?.map((blogItem: {_id: string;author: string; text: string, createdAt: string})=>{
            return (
              <SingleBlog key={blogItem?._id} blogItem={blogItem}/> 
            )
          })
        }
        
        </>
        :
        <div>No Blogs Yet</div>
      }
    </div>
    {/* add new blog form */}
    <NewBlogForm />
  </div>;
}
