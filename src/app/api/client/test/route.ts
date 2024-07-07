import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/configs/dbConfig";

// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";

connect();

export async function GET(req: NextRequest) {
  return NextResponse.json({
    message: "test",
    userId: req.headers.get("userId"),
  });
}
