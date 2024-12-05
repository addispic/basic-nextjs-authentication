import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
// icons
import { PiUserLight } from "react-icons/pi";
import { PiClockAfternoonThin } from "react-icons/pi";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { PiTrashLight } from "react-icons/pi";
// ui
// user
import GetUsernameWithID from "../users/GetUsernameWithID";
// ui
// blog
import DeleteBlogButton from "./DeleteBlogButton";
// ui
// comments
import CommentsCounter from "../comments/CommentsCounter";

export default function SingleBlog({
  blogItem,
}: {
  blogItem: { _id: string; author: string; text: string; createdAt: string };
}) {
  return (
    <div className="mb-7">
      {/* blog content */}
      <div>
        {/* image */}
        {/* text */}
        <div className="bg-neutral-50 text-sm text-neutral-800 p-3 rounded-b-md overflow-hidden">
          <p>{blogItem.text}</p>
        </div>
      </div>
      {/* footer */}
      <footer className="my-1.5 flex items-center gap-x-5">
        {/* user profile */}
        <div className="flex items-center gap-x-3">
          {/* username & profile */}
          <div className="flex items-center gap-x-0.5 cursor-pointer text-green-500 transition-colors ease-in-out duration-150 hover:text-green-600">
            {/* profile */}
            <div>
              <PiUserLight />
            </div>
            <div className="text-sm">
              <GetUsernameWithID _id={blogItem.author} />
            </div>
          </div>
          {/* date */}
          <div className="flex items-center gap-0.5">
            <CiCalendarDate className="text-neutral-500" />
            <span className="text-xs text-green-500">
              {formatDistanceToNow(new Date(blogItem.createdAt), {
                addSuffix: true,
              })}
            </span>
          </div>
        </div>
        {/* actions */}
        <div className="flex items-center gap-x-3">
          {/* fav */}
          <div>
            <MdOutlineFavoriteBorder className="text-neutral-500 transition-colors ease-in-out duration-150 hover:text-neutral-600 cursor-pointer" />
          </div>
          {/* like */}
          <div>
            <AiOutlineLike className="text-neutral-500 transition-colors ease-in-out duration-150 hover:text-neutral-600 cursor-pointer" />
          </div>
          {/* dislike */}
          <div>
            <AiOutlineDislike className="text-neutral-500 transition-colors ease-in-out duration-150 hover:text-neutral-600 cursor-pointer" />
          </div>
          {/* comment */}
          <div>
            <Link
              href={{
                pathname: "/comments",
                query: { _id: blogItem._id },
              }}
              className="flex items-center gap-x-0.5"
            >
              <GoComment className="text-neutral-500 transition-colors ease-in-out duration-150 hover:text-neutral-600 cursor-pointer" />{" "}
              <span className="text-sm text-green-500">
                <CommentsCounter blogId={blogItem._id}/>
              </span>
              <span className="text-sm text-green-500">comments</span>
            </Link>
          </div>
          {/* delete */}
          <DeleteBlogButton author={blogItem.author} _id={blogItem._id} />
        </div>
      </footer>
    </div>
  );
}
