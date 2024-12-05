"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
// icons
import { MdAttachFile } from "react-icons/md";
import { GrSend } from "react-icons/gr";
export default function NewBlogForm() {
  // states
  // text
  const [text, setText] = useState("");
  //   focus
  const [focus, setFocus] = useState("");
  // is form submitting
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  // reference
  const textareaReference = useRef<HTMLTextAreaElement>(null);

  // hooks
  const router = useRouter()

  // textarea height handler
  useEffect(() => {
    if (textareaReference.current) {
      textareaReference.current.style.height = "20px";
      textareaReference.current.style.height = `${textareaReference.current.scrollHeight}px`;
    }
  }, [text]);

  // add form submit handler
  const submitFormHandler = async () => {
    setIsFormSubmitting(true);
    if (text.trim()) {
      try {
        const response = await axios.post("http://localhost:3000/api/blogs", {
          text,
        });
        console.log(response.status);
        if (response.status === 200) {
          setText("");
          setIsFormSubmitting(false);
          if (textareaReference?.current) {
            textareaReference.current.style.height = "20px";
            setText("");
          }
          router.push("/")
        }
        setIsFormSubmitting(false);
      } catch (err) {
        console.log(err);
        setIsFormSubmitting(false);
        if (textareaReference?.current) {
          textareaReference.current.style.height = "20px";
          setText("");
        }
      }
    } else {
      setIsFormSubmitting(false);
      if (textareaReference?.current) {
        textareaReference.current.style.height = "20px";
        setText("");
      }
    }
  };

  return (
    <div className="py-1.5 flex items-end gap-x-1.5 bg-white">
      {/* file picker */}
      <div>
        <MdAttachFile className="text-2xl cursor-pointer text-green-500 transition-colors ease-in-out duration-150 hover:text-green-600" />
      </div>
      {/* text area */}
      <div
        className={`flex-1 border rounded-md px-1.5 py-1 text-sm flex items-center ${
          focus === "text" ? "border-green-500" : "border-neutral-400"
        }`}
      >
        <textarea
          className="w-full focus:outline-none focus:ring-0 border-none bg-transparent resize-none p-0 h-[20px] max-h-[65vh] no-scroll-bar"
          placeholder="text..."
          name=""
          id=""
          ref={textareaReference}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          onFocus={() => {
            setFocus("text");
          }}
          onBlur={() => {
            setFocus("");
          }}
        ></textarea>
      </div>
      {/* send button */}
      <button
        disabled={isFormSubmitting}
        className={`text-xl transition-colors ease-in-out duration-150 md:text-2xl ${
          text.trim()
            ? "text-green-500 hover:text-green-600"
            : "text-neutral-500 hover:text-neutral-600 "
        }`}
        onClick={() => {
          submitFormHandler();
        }}
      >
        {isFormSubmitting ? (
          <div className="w-[24px] aspect-square border-2 border-green-500 rounded-full border-r-transparent animate-spin" />
        ) : (
          <GrSend />
        )}
      </button>
    </div>
  );
}
