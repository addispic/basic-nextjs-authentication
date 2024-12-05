import { NextRequest, NextResponse } from "next/server";
// db
import { dbConnectionHandler } from "@/app/db/dbConnection";
// model
import BlogModel from '@/app/models/blog-model'

// get single blog
export async function GET(request: NextRequest, {params}: {params: {_id: string}}){
    const { _id } = await params;
    try{
        await dbConnectionHandler()
        const isBlogExist = await BlogModel.findById(_id)
        if(!isBlogExist){
            return NextResponse.json({error: 'blog not exist'},{status: 400})
        }
        return NextResponse.json({isBlogExist}, {status: 200})
    }catch(err){
        return NextResponse.json({error: 'get single blog error'},{status: 400})
    }
}

// delete single blog
export async function DELETE(request: NextRequest, {params}: {params: {_id: string}}) {
    const {_id} = params
    try{
        await dbConnectionHandler()
        const isBlogExist = await BlogModel.findById(_id) 
        if(isBlogExist){
            await BlogModel.findByIdAndDelete(_id)
            return NextResponse.json({message: 'blog successfully deleted'}, {status: 200})
        }else {
            return NextResponse.json({error: 'blog not found'}, {status: 400})
        }
    }catch(err){
        console.log(err)
        return NextResponse.json({error: 'delete blog failed'},{status: 200})
    }
}