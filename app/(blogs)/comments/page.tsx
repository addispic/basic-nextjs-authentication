// icons
import { PiUserLight } from "react-icons/pi";
import { CiCalendarDate } from "react-icons/ci";
// ui
import NewCommentForm from "@/app/ui/comments/NewCommentForm";
import CommentList from "@/app/ui/comments/CommentList";

interface CommentsPageProps {
  searchParams: { _id: string };
}

const CommentsPage = async ({ searchParams }: CommentsPageProps) => {
  const { _id } = await searchParams;

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
              <span>by Haddis</span>
            </div>
            {/* date */}
            <div className="flex items-center text-xs text-neutral-500 gap-x-1.5">
              <CiCalendarDate className="text-lg" />
              <span className="text-green-500">3 minutes ago</span>
            </div>
          </header>
          {/* text */}
          <div className="text-sm bg-neutral-50 p-5 rounded-md">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              impedit consequuntur cum! Dolorum quisquam, blanditiis odit
              aperiam, cupiditate dolor dolore aut numquam ullam consequuntur
              cum? Quos incidunt perferendis dolorem dicta fuga facilis a
              ratione doloremque, numquam exercitationem cumque repellendus
              laudantium quasi voluptatibus.
            </p>
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
