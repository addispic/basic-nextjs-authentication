// icons
import { PiUserLight } from "react-icons/pi";
import { CiCalendarDate } from "react-icons/ci";
export default function SingleComment() {
  return (
    <div className="mb-5">
      {/* content */}
      <div className="text-neutral-900 text-sm ml-5 px-1.5 py-1.5 bg-neutral-50 rounded-md">
        <p>
            Ipsam dolorem repellendus et!
        </p>
      </div>
      {/* footer */}
      <div className="flex items-center gap-x-3 mt-1.5">
        {/* profile */}
        <div className="flex items-center gap-x-1 cursor-pointer text-green-500 transition-colors ease-in-out duration-150 hover:text-green-600">
          <PiUserLight />
          <span className="text-sm">Haddis</span>
        </div>
        {/* date */}
        <div className="flex items-center gap-x-1 ">
          <CiCalendarDate className=" text-neutral-600" />
          <span className="text-green-500 text-xs">2 minutes ago</span>
        </div>
      </div>
    </div>
  );
}
