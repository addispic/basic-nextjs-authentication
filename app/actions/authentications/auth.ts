"use server"

// db
import { dbConnectionHandler } from "@/app/db/dbConnection"

// signup
export async function signup(){
    try{
        await dbConnectionHandler()
    }catch(err){
        console.log(err)
    }
}