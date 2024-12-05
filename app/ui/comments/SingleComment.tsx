import { formatDistanceToNow } from "date-fns";
// icons
import { PiUserLight } from "react-icons/pi";
import { CiCalendarDate } from "react-icons/ci";
// ui
import GetUsernameWithID from "../users/GetUsernameWithID";
export default function SingleComment({
  comment,
}: {
  comment: {
    _id: string;
    blog: string;
    author: string;
    text: string;
    createdAt: string;
  };
}) {
  return (
    <div className="mb-5">
      {/* content */}
      <div className="text-neutral-900 text-sm ml-5 px-1.5 py-1.5 bg-neutral-50 rounded-md">
        <p>{comment.text}</p>
      </div>
      {/* footer */}
      <div className="flex items-center gap-x-3 mt-1.5">
        {/* profile */}
        <div className="flex items-center gap-x-1 cursor-pointer text-green-500 transition-colors ease-in-out duration-150 hover:text-green-600">
          <PiUserLight />
          <div className="capitalize text-sm">
            <GetUsernameWithID _id={comment.author} />
          </div>
        </div>
        {/* date */}
        <div className="flex items-center gap-x-1 ">
          <CiCalendarDate className=" text-neutral-600" />
          <span className="text-green-500 text-xs">
            {formatDistanceToNow(new Date(comment?.createdAt), {
              addSuffix: true,
            })}
          </span>
        </div>
      </div>
    </div>
  );
}
