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
export default function SingleBlog(){
    return (
      <div className="mb-7">
        {/* blog content */}
        <div>
          {/* image */}
          {/* text */}
          <div className="bg-neutral-50 text-sm text-neutral-800 p-3 rounded-b-md overflow-hidden">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
              consequuntur architecto aut quaerat saepe id ipsa quam maxime.
              Consequatur, temporibus ducimus corporis rem ea blanditiis nam
              ratione consequuntur molestiae sed vero dicta quidem placeat nisi
              totam non voluptates sit commodi ut quos?
            </p>
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
                <span>Username</span>
              </div>
            </div>
            {/* date */}
            <div className="flex items-center gap-0.5">
              <CiCalendarDate className="text-neutral-500" />
              <span className="text-sm text-green-500">1 minutes ago</span>
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
              <GoComment className="text-neutral-500 transition-colors ease-in-out duration-150 hover:text-neutral-600 cursor-pointer" />
            </div>
            {/* delete */}
            <PiTrashLight className="text-neutral-500 transition-colors ease-in-out duration-150 hover:text-neutral-600 cursor-pointer" />
          </div>
        </footer>
      </div>
    );
}