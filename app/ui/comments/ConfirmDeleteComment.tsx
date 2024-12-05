"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// icons
import { PiTrashLight } from "react-icons/pi";
import { PiWarningThin } from "react-icons/pi";
export default function ConfirmDeleteComment({ _id, blog }: { _id: string ; blog: string}) {
  // states
  // is delete blog confirm on
  const [isConfirmOn, setIsConfirmOn] = useState(false);
  // is deleting
  const [isDeleting, setIsDeleting] = useState(false);

//   hooks 
const router = useRouter()

  // delete handler
  const deleteBlogItemHandler = async () => {
    setIsDeleting(true)
    const response = await axios.delete(
      `http://localhost:3000/api/comments/${_id}`
    );
    console.log(response.data);
    if(response.status === 200){
        setIsConfirmOn(false)
        setIsDeleting(false)
        router.push(`/comments?_id=${blog}`)
    }
  };
  return (
    <>
      {isConfirmOn ? (
        <div
          className="fixed w-screen h-screen bg-black z-10 bg-opacity-25 left-0 top-0 flex items-center justify-center"
          onClick={() => {
            setIsConfirmOn(false);
          }}
        >
          <div
            className="relative z-20 p-5 rounded-md bg-white overflow-hidden min-w-64 max-w-72"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {/* header */}
            <header className="flex items-center gap-x-3">
              <div className="w-[24px] aspect-square border border-orange-500 rounded-full flex items-center justify-center text-orange-500 shrink-0">
                <PiWarningThin />
              </div>
              <div>
                <h3 className="text-orange-500">Delete comment</h3>
              </div>
            </header>
            <p className="text-sm text-neutral-500 my-2.5 text-center">
              Are you sure ? Remember this action is undone.
            </p>
            <div className="mt-2.5 flex items-center justify-evenly">
              <button
                onClick={() => {
                  setIsConfirmOn(false);
                }}
                className="px-3.5 py-0.5 bg-neutral-100 rounded-md text-sm transition-colors ease-in-out duration-150 hover:bg-neutral-200"
              >
                Cancel
              </button>
              <button
                className="text-sm w-[75px] px-2.5 py-0.5 bg-green-500 text-white rounded-md transition-colors ease-in-out duration-150 hover:bg-green-600 flex items-center justify-center"
                onClick={() => {
                  deleteBlogItemHandler();
                }}
              >
                {isDeleting ? <div className="w-[20px] aspect-square rounded-full border-2 border-white border-r-transparent animate-spin"/> : <span>Confirm</span>}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => {
            setIsConfirmOn(true);
          }}
        >
          <PiTrashLight className="text-neutral-500 transition-colors ease-in-out duration-150 hover:text-neutral-600 cursor-pointer" />
        </button>
      )}
    </>
  );
}
