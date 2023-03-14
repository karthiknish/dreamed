import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default function withAuthorization(middleware, requireAuth) {
  return async (request, next) => {
    const pathname = request.nextUrl.pathname;
   console.log(requireAuth?.some((path) => pathname.startsWith(path)));
    if (requireAuth?.some((path) => pathname.startsWith(path))) {
      const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
      });
      console.log(token);
      // if (!token) {
      //   const url = new URL(`/api/auth/signin`, request.url);
      //   url.searchParams.set("callbackUrl ", encodeURI(request.url));
      //   return NextResponse.redirect(url);
      // }

      if (token.name !== "admin" && pathname === "/admin") {
        const url = new URL(`/403`, request.url);
        return NextResponse.rewrite(url);
      }
    }
    return middleware(request, next);
  };
}
