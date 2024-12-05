"use client"
import React, {useState} from "react";
// icons
import { PiTrashLight } from "react-icons/pi";
import { PiWarningThin } from "react-icons/pi";
export default function ConfirmDeleteBlog({_id}: {_id: string}){
    // states
    // is delete blog confirm on 
    const [isConfirmOn,setIsConfirmOn] = useState(false)
    return (
      <>
        {isConfirmOn ? (
          <div className="fixed w-screen h-screen bg-black z-10 bg-opacity-25 left-0 top-0 flex items-center justify-center" onClick={()=>{
            setIsConfirmOn(false)
          }}>
            <div className="relative z-20 p-5 rounded-md bg-white overflow-hidden min-w-64 max-w-72" onClick={(e)=>{
                e.stopPropagation()
            }}>
              {/* header */}
              <header className="flex items-center gap-x-3">
                <div className="w-[24px] aspect-square border border-orange-500 rounded-full flex items-center justify-center text-orange-500 shrink-0">
                  <PiWarningThin />
                </div>
                <div>
                  <h3>Delete blog</h3>
                </div>
              </header>
              <p className="text-sm text-neutral-500 my-2.5 text-center">
                Are you sure ? Remember this action is undone.
              </p>
              <div className="mt-2.5 flex items-center justify-evenly">
                <button onClick={()=>{
                    setIsConfirmOn(false)
                }} className="px-3.5 py-0.5 bg-neutral-100 rounded-md text-sm transition-colors ease-in-out duration-150 hover:bg-neutral-200">Cancel</button>
                <button className="text-sm px-2.5 py-0.5 bg-green-500 text-white rounded-md transition-colors ease-in-out duration-150 hover:bg-green-600">Confirm</button>
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