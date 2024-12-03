import {NextRequest, NextResponse} from 'next/server'
import {SignJWT,jwtVerify} from 'jose'
import { cookies } from 'next/headers'

// secret
const secretKey = process.env.SECRET_KEY || ""
const encodedKey = new TextEncoder().encode(secretKey)

// encrypt
export async function encrypt(payload: any){
    return new SignJWT(payload)
        .setProtectedHeader({alg: 'HS256'})
        .setIssuedAt()
        .setExpirationTime("24h from now")
        .sign(encodedKey)
}

// decrypt
export async function decrypt(session: any){
    try{
        const {payload} = await jwtVerify(session,encodedKey,{algorithms: ["HS256"]})
        return payload
    }catch(err){
        console.log(err)
        console.log("Failed to verify session.")
    }
}

// get payload
export async function getPayload(){
    const session = (await cookies()).get("session")?.value
    if(!session) return 
    return await decrypt(session)
}

// update session
export async function updateSession(request: NextRequest){
    const session = request.cookies.get("session")?.value 
    if(!session){
        return
    }

    const parsed = await decrypt(session) 

    const response = NextResponse.next() 

    response.cookies.set({
        name: 'session',
        value: await encrypt(parsed),
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        path: "/",
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
    })
    return response
}