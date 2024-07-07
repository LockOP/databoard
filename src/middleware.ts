import { auth as middleware } from "@/auth";
import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import { connect } from "./configs/dbConfig";
import { decode } from "next-auth/jwt";
import { Session } from "next-auth";

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

export default middleware((req, ctx) => {
  const { auth }: { auth: (Session & { _id?: string }) | null } = req;
  // return NextResponse.redirect(new URL("/s", req.nextUrl.origin));

  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    if (!auth || !auth._id || auth._id === "") {
      return NextResponse.redirect(new URL("/signin", req.nextUrl.origin));
    }
  }

  if (req.nextUrl.pathname.startsWith("/api/client")) {
    if (!auth || !auth._id || auth._id === "") {
      return NextResponse.json({ message: "unauthenticated" }, { status: 401 });
    }
    const userId = "";

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("userId", auth._id);

    return NextResponse.next({ request: { headers: requestHeaders } }); // overides the client request
  }
});
