import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "../../../models/User";
import dbConnect from "../../../lib/dbConnect";
export default NextAuth({
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        dbConnect();
        const { email, password } = credentials;
        const user = await User.findOne({ email });
        if (!user) {
          console.error("Invalid Email address");
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
  pages: { signIn: "/sign" },
  secret: process.env.NEXTAUTH_SECRET,
});
