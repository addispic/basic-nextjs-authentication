import { NextResponse, NextRequest } from "next/server";

// db 
import { dbConnectionHandler } from "@/app/db/dbConnection";
// model
import BlogModel from '@/app/models/blog-model'
// lib
import { decrypt } from "@/app/lib/session";

// get all blogs
export async function GET() {
  try{
    await dbConnectionHandler()
    const blogs = await BlogModel.find().sort({createdAt: -1})
    return NextResponse.json({blogs},{status: 200})
  }catch(err){
    console.log(err)
    return NextResponse.json({error: 'get all blogs error'}, {status: 400})
  }
}

// add new blog
export async function POST(request: NextRequest) {
  try{
    const session = request.cookies.get("session")?.value 
    if(!session){
        return NextResponse.json({error: 'no session'},{status: 400})
    }
    const payload = await decrypt(session) 
    console.log(payload)
    return NextResponse.json({message: 'add new blog'}, {status: 200})
  }catch(err){
    console.log(err)
    return NextResponse.json({error: 'add new blog error'},{status: 400})
  }
}

// delete blog
export async function DELETE() {
  return NextResponse.json({ message: "delete blog" });
}
