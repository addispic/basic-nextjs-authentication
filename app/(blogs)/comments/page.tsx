import { redirect } from "next/navigation";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
// icons
import { PiUserLight } from "react-icons/pi";
import { CiCalendarDate } from "react-icons/ci";
// ui
import NewCommentForm from "@/app/ui/comments/NewCommentForm";
import CommentList from "@/app/ui/comments/CommentList";
import GetUsernameWithID from "@/app/ui/users/GetUsernameWithID";

interface CommentsPageProps {
  searchParams: { _id: string };
}

const CommentsPage = async ({ searchParams }: CommentsPageProps) => {
  const { _id } = await searchParams;

  const response = await axios.get(`http://localhost:3000/api/blogs/${_id}`);
  if(response.status !== 200) redirect("/")

  return (
    <div className="h-[94vh] overflow-hidden flex flex-col">
      {/* blog */}
      <div className="flex-1 pr-1.5 max-h-[90vh] overflow-y-auto custom-scroll-bar">
        {/* blog */}
        <div className="border-b border-neutral-200 my-3 pb-3 ">
          {/* header */}
          <header className="mb-1.5 flex items-center gap-x-3 border-b border-neutral-200 pb-1.5">
            {/* author */}
            <div className="flex items-center gap-x-1.5 text-sm text-green-500 cursor-pointer transition-colors ease-in-out duration-150 hover:text-green-600">
              <PiUserLight className="text-lg" />
              <span>by</span> <GetUsernameWithID _id={response.data?.isBlogExist?.author} /> 
            </div>
            {/* date */}
            <div className="flex items-center text-xs text-neutral-500 gap-x-1.5">
              <CiCalendarDate className="text-lg" />
              <span className="text-green-500">
                {formatDistanceToNow(
                  new Date(response.data?.isBlogExist?.createdAt),
                  {
                    addSuffix: true,
                  }
                )}
              </span>
            </div>
          </header>
          {/* text */}
          <div className="text-sm bg-neutral-50 p-5 rounded-md">
            <p>{response.data?.isBlogExist?.text}</p>
          </div>
        </div>
        {/* comment list */}
        <CommentList />
      </div>
      {/* add new comment */}
      <NewCommentForm />
    </div>
  );
};

export default CommentsPage;
