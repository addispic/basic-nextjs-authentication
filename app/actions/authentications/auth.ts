"use server"
import bcrypt from 'bcryptjs'
import { cookies } from 'next/headers'
// db
import { dbConnectionHandler } from "@/app/db/dbConnection"
// models
import UserModel from "@/app/models/user-model"

// lib
import { encrypt } from '@/app/lib/session'

// signup
export async function signup(userCredentials: {email: String; password: string}){
    try{ 
        const {email,password} = userCredentials 
        await dbConnectionHandler() 
        const isUserExist = await UserModel.findOne({email})
        if(!isUserExist){
            const newUser = await UserModel.create({
              email,
              password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
            });
            const session = await encrypt({_id: newUser._id})
                ;(await cookies()).set("session",session,{
                    httpOnly: true,
                    secure: true,
                    sameSite: 'lax',
                    path: "/",
                    expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
                })
            return {
                message: 'success signup.'
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

// login
export async function login(userCredentials: {email: string; password: string}){
    
    const {email,password} = userCredentials 
    try{
        await dbConnectionHandler()
        const isUserExist = await UserModel.findOne({email})
        if(isUserExist){
            const isPasswordPatch = bcrypt.compareSync(password,isUserExist.password) 
            if(isPasswordPatch){
                const session = await encrypt({_id: isUserExist._id})
                ;(await cookies()).set("session",session,{
                    httpOnly: true,
                    secure: true,
                    sameSite: 'lax',
                    path: "/",
                    expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
                })
                return {
                    message: 'success login.'
                }
            }else{
                return {
                    passwordError: 'Incorrect password.'
                }
            }
        }else {
            return {
            emailError: 'User with this email not exist.'
            }
        }
    }catch(err){
        console.log(err)
        return {
            error: 'Login error.'
        }
    }
}

// logout
export async function logout(){
    const cookieStore = await cookies()
    cookieStore.delete("session")
}