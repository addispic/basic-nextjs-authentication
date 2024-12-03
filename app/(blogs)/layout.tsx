import React from "react"
// ui
// blogs
// header
import BlogsHeader from "../ui/users/blogs/Header"

export default function BlogsLayout({children}: {children: React.ReactNode}){
    return (
        <div className="w-screen h-screen overflow-hidden flex flex-col">
            {/* header */}
            <BlogsHeader />
            {/* content */}
            <div className="flex-1 flex gap-x-3">
                {/* left side */}
                <div className="w-72 shrink-0 bg-red-200">Left Side</div>
                {/* children */}
                <div className="flex-1">{children}</div>
                {/* right */}
                <div className="w-64 lg:w-96 shrink-0 bg-green-100">Right Side</div>
            </div>
        </div>
    )
}