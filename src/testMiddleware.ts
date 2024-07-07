import { auth as middleware } from "@/auth";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { decode, getToken } from "next-auth/jwt";

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

export default middleware((req, ctx) => {
  const { auth } = req;
  const headerList = headers();
  const cookieList = cookies();
  //   console.log(JSON.stringify(auth));

  if (req.nextUrl.pathname.includes("api")) {
    // console.log(
    //   "requested url:",
    //   req.url,
    //   "cookie :",
    //   req.cookies.get("authjs.session-token"),
    //   cookieList.get("authjs.session-token")
    // );
    // const token = getToken({
    //   req,
    //   secret: process.env.AUTH_SECRET!,
    //   secureCookie: process.env.NODE_ENV === "production",
    //   salt:
    //     process.env.NODE_ENV === "production"
    //       ? "__Secure-authjs.session-token"
    //       : "authjs.session-token",
    // });
    // const decoded = decode({
    //   secret: process.env.AUTH_SECRET!,
    //   token: cookieList.get("authjs.session-token")?.value,
    //   salt:
    //     process.env.NODE_ENV === "production"
    //       ? "__Secure-authjs.session-token"
    //       : "authjs.session-token",
    // });

    // console.log(JSON.stringify(auth));
    req.cookies.set({ name: "custom", value: "123" });
    // return NextResponse.next({ headers: { custom: "123" } });
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("xname", "foo");
    // return new Response("Bye World ");
    // return NextResponse.next({ headers: requestHeaders});
    console.log("middleware", requestHeaders);
    return NextResponse.next({ request: { headers: requestHeaders } }); // overides the client request
  }
});
