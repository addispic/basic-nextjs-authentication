"use client";
import React, { useState } from "react";
import Link from "next/link";
// icons
import { IoMdArrowDropdown } from "react-icons/io";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
export default function SignupForm() {
  // states
  // is password hide
  const [isPasswordHide, setIsPasswordHide] = useState(true);
  //   focus
  const [focus, setFocus] = useState("");
  // email
  const [email, setEmail] = useState("");
  // password
  const [password, setPassword] = useState("");

//   form submit handler
const formSubmitHandler = () => {
    console.log({email,password})
}

  return (
    <div className="min-w-96 p-5 bg-white shadow-xl">
      {/* header */}
      <header className="flex items-center justify-end">
        {/* language switcher */}
        <div className="flex items-center justify-end gap-x-0.5 text-sm text-neutral-500 cursor-pointer transition-colors ease-in-out duration-150 hover:text-green-500">
          <span>English(US)</span>
          <IoMdArrowDropdown className="text-xl" />
        </div>
      </header>
      {/* header */}
      <h3 className="text-xl text-green-500 my-1.5">Create account</h3>
      {/* inputs */}
      <div className="mt-5">
        {/* email */}
        <div className="mb-5">
          <div
            className={`border px-1.5 py-1.5 rounded-md text-sm flex items-center ${
              focus === "email" || email ? "border-green-500" : "border-neutral-300"
            }`}
          >
            <input
              className="flex-1 focus:outline-none focus:ring-0 border-none bg-transparent"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              onFocus={() => {
                setFocus("email");
              }}
              onBlur={() => {
                setFocus("");
              }}
            />
          </div>
          {/* email error */}
          {!true && (
            <div className="ml-1.5 text-sm text-red-600">
              <p>Email address required</p>
            </div>
          )}
        </div>
        {/* password */}
        <div className="mb-5">
          <div
            className={`border px-1.5 py-1.5 rounded-md text-sm flex items-center ${
              focus === "password"  || password ? "border-green-500" : "border-neutral-300"
            }`}
          >
            <input
              className="flex-1 focus:outline-none focus:ring-0 border-none bg-transparent"
              type={isPasswordHide ? "password" : "text"}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onFocus={() => {
                setFocus("password");
              }}
              onBlur={() => {
                setFocus("");
              }}
            />
            <button
              className="text-xl text-neutral-500"
              onClick={() => {
                setIsPasswordHide(!isPasswordHide);
              }}
            >
              {isPasswordHide ? <VscEyeClosed /> : <VscEye />}
            </button>
          </div>
          {/* password error */}
          {!true && (
            <div className="ml-1.5 text-sm text-red-600">
              <p>password required</p>
            </div>
          )}
        </div>

        {/* button */}
        <button
          onClick={formSubmitHandler}
          className="w-full my-7 flex items-center justify-center py-1.5 text-sm bg-green-500 rounded-md overflow-hidden text-white relative after:absolute after:left-0 after:top-0 after:w-0 after:h-full after:bg-green-600 after:transition-all after:ease-in-out after:duration-150 hover:after:w-full"
        >
          <span className="relative z-10">Signup</span>
        </button>
        <p className="text-sm text-neutral-500 mb-5">
          Already have an account ?{" "}
          <Link
            href={"/login"}
            className="font-medium transition-colors ease-in-out duration-150 hover:underline hover:text-green-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
