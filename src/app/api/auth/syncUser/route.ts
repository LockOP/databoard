import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/configs/dbConfig";
import Error from "next/error";

connect();

export async function POST(request: NextRequest) {
  try {
    // throw new Error({ statusCode: 400, message: "Test" });
    const { name = null, email, imageUrl = null } = await request.json();
    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400, statusText: "Email is required" }
      );
    }
    const checkUser = await User.findOne({ email });

    if (checkUser) {
      return NextResponse.json({ message: "User found", _id: checkUser._id });
    } else {
      const newUser = new User({ name, email, imageUrl });
      await newUser.save();
      return NextResponse.json({
        message: "User created successfully",
        _id: newUser._id,
      });
    }
  } catch (error: Error | any) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
