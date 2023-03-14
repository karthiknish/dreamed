import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "../../../models/User";
import dbConnect from "../../../lib/dbConnect";
export default NextAuth({
  session: { strategy: "jwt" },
  site: process.env.NEXTAUTH_URL,
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        await dbConnect();

        const { email, password } = credentials;

        const user = await User.findOne({ email });
        // console.log(user.status);
        if (user === undefined) {
          // console.log(user.error);
        }
        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
          console.error("Wrong password");
        }
        return user;
      },
    }),
    // GoogleProvider({ clientId: "", clientSecret: "" }),
  ],
  pages: { signIn: "/sign", error: "/sign" },
  secret: process.env.NEXTAUTH_SECRET,
});
