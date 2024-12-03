"use server"
import bcrypt from 'bcryptjs'
// db
import { dbConnectionHandler } from "@/app/db/dbConnection"
// models
import UserModel from "@/app/models/user-model"

// signup
export async function signup(userCredentials: {email: String; password: string}){
    try{ 
        const {email,password} = userCredentials 
        await dbConnectionHandler() 
        const isUserExist = await UserModel.findOne({email})
        if(!isUserExist){
            await UserModel.create({
              email,
              password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
            });
            return {
                message: 'success'
            }
        }else{
            return {
                emailError: 'Email address already exist.'
            }
        }
    }catch(err){
        console.log(err)
    }
}