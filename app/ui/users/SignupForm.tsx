"use client";
import React, { useState } from "react";
import Link from "next/link";
// icons
import { IoMdArrowDropdown } from "react-icons/io";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
// lib
// signup form schema
import { SignupFormSchema } from "@/app/lib/definitions";
// actions
// signup
import { signup } from "@/app/actions/authentications/auth";
// interface
// form field error interface
interface FormFieldErrorInterface {
  email?: string[];
  password?: string[];
}
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
  //   errors
  const [formFieldErrors, setFormFieldErrors] =
    useState<FormFieldErrorInterface>({});
  // is submitting
  const [isSubmitting, setIsSubmitting] = useState(false);

  //   form submit handler
  const formSubmitHandler = async () => {
    const validatedFields = SignupFormSchema.safeParse({ email, password });
    if (!validatedFields?.success) {
      setFormFieldErrors(validatedFields.error.flatten().fieldErrors);
    } else {
      setFormFieldErrors({});
      setIsSubmitting(true);
      const response = await signup({ email, password });
      if (response?.message) {
        setIsSubmitting(false);
        setFormFieldErrors({});
      }
      if (response?.emailError) {
        setFormFieldErrors((prev) => {
          return {
            ...prev,
            email: ["Email address already exist."],
          };
        });
        setIsSubmitting(false);
      }
      console.log(response, "+++");
    }
  };

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
              formFieldErrors?.email?.length
                ? "border-red-500"
                : focus === "email" || email
                ? "border-green-500"
                : "border-neutral-300"
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
          {formFieldErrors?.email?.length && (
            <div className="ml-1.5 text-sm text-red-600">
              {formFieldErrors?.email?.map((item) => {
                return <p key={item}>{item}</p>;
              })}
            </div>
          )}
        </div>
        {/* password */}
        <div className="mb-5">
          <div
            className={`border px-1.5 py-1.5 rounded-md text-sm flex items-center ${
              formFieldErrors?.password?.length
                ? "border-red-500"
                : focus === "password" || password
                ? "border-green-500"
                : "border-neutral-300"
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
          {formFieldErrors?.password?.length && (
            <div className="ml-1.5 text-sm text-red-600">
              {formFieldErrors?.password?.map((item) => {
                return <p key={item}>{item}</p>;
              })}
            </div>
          )}
        </div>

        {/* button */}
        <button
          disabled={isSubmitting}
          onClick={() => {
            formSubmitHandler();
          }}
          className="w-full my-7 flex items-center justify-center py-1.5 text-sm bg-green-500 rounded-md overflow-hidden text-white relative after:absolute after:left-0 after:top-0 after:w-0 after:h-full after:bg-green-600 after:transition-all after:ease-in-out after:duration-150 hover:after:w-full"
        >
          {isSubmitting ? (
            <div className="w-[20px] relative z-10 aspect-square border-2 border-white rounded-full border-r-transparent animate-spin" />
          ) : (
            <span className="relative z-10">Signup</span>
          )}
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
