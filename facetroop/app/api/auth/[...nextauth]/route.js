import { session } from '@/lib/session'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

const GOOGLE_CLIENT_ID = process.env.clientID
const GOOGLE_CLIENT_SECRET = process.env.clientSecret
// console.log(GOOGLE_CLIENT_ID);
const authOption = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error('No profile')
      }
      return true
    },
    session,
    async jwt({ token, user, account, profile }) {
    //   if (profile) {
    //     const user = await prisma.user.findUnique({
    //       where: {
    //         email: profile.email,
    //       },
    //     })
    //     if (!user) {
    //       throw new Error('No user found')
    //     }
    //     token.id = user.id
    //   }
      return token
    },
  },
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }
