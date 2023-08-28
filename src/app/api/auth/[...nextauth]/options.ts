import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
            authorization: {
                params: {
                    hd: 'srmist.edu.in'
                }
            }    
        }),
    ],
    callbacks: {
        // Check if the user is signIn or signUp
        async signIn({user}) {
            const isAllowedToSignIn = user.email!.endsWith('@srmist.edu.in')
            if (isAllowedToSignIn) return true;
            else return false;
        }
    }
}