import {NextRequest,NextResponse} from 'next/server'
// session
import { updateSession } from './app/lib/session'
export default async function middleware(request: NextRequest){
    const session = request.cookies.get("session")?.value 
    if(!session){
        return NextResponse.redirect(new URL("/login",request.url))
    }else{
        return await updateSession(request)
    }
}

// matcher
export const config = {
    matcher: ["/","/profile"]
}