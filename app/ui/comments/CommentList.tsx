import axios from "axios"
// ui
import SingleComment from "./SingleComment"
export default async function CommentList({blogId}: {blogId: string}){
    const response = await axios.get(`http://localhost:3000/api/comments?blogId=${blogId}`);
    return (
      <div>
        {response?.data?.comments?.length ? <>
        {
            response?.data?.comments?.map((commentItem: {_id: string,blog: string, author: string, text: string, createdAt: string})=>{
                return (
                    <SingleComment key={commentItem._id} comment={commentItem}/>
                )
            })
        }
        </>: <div>No comments yet</div>}
        
      </div>
    );
}