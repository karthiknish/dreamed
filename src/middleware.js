import withAuthorization from "middlewares/withAuthorization";
import { NextResponse } from "next/server";
const mainMiddleware = (request) => {
  const res = NextResponse.next();
  return res;
};
export default withAuthorization(mainMiddleware, ["/adminfefe"]);
// import { withAuth } from "next-auth/middleware";

// export const config = { matcher: ["/admin/:path*"] };
// export default withAuth({});
