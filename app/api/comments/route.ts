import { NextResponse, NextRequest } from "next/server";

// db
import { dbConnectionHandler } from "@/app/db/dbConnection";
// model
import CommentModel from "@/app/models/comment-model";
// lib
import { decrypt } from "@/app/lib/session";
// get all comment
export async function GET(request: NextRequest) {
  const blog = request.nextUrl.searchParams.get("blogId");
  try {
    await dbConnectionHandler();
    const comments = await CommentModel.find({ blog }).sort({ createdAt: -1 });
    return NextResponse.json({ comments }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "get comments error" }, { status: 400 });
  }
}

// add comment
export async function POST(request: NextRequest) {
  const {blog, text} = await request.json();
  try{
    const session = request.cookies.get("session")?.value;
    if (!session) {
      return NextResponse.json({ error: "no session" }, { status: 400 });
    }
    const payload = await decrypt(session);
    await CommentModel.create({ author: payload?._id, blog, text });
    return NextResponse.json({message: 'blog comment added successfully'}, {status: 200})
  }catch(err){
      return NextResponse.json({ error: "add new comment error" }, { status: 400 });

  }
}
