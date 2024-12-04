import {NextRequest,NextResponse} from 'next/server'
import mongoose from 'mongoose';


// db
import { dbConnectionHandler } from '@/app/db/dbConnection';
// models
// user model
import UserModel from '@/app/models/user-model';

export async function GET(request: NextRequest){
    const _id = request.nextUrl.searchParams.get("_id")
    try{
        // db connection
        await dbConnectionHandler()
        const isUserExist = await UserModel.findById(_id) 
        if(isUserExist){
            return NextResponse.json({
                email: isUserExist.email,
                username: isUserExist.username,
            },{status: 200})
        }else{
            return NextResponse.json({error: 'User ot exist.'})
        }
    } catch(err){
        console.log(err)
        return NextResponse.json({error: 'Get username error'})
    }
}