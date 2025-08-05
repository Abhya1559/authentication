import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/User";
import { hashPassword } from "@/lib/hash";
import { connectDB } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({
        message: "All credentials are required",
        status: 404,
      });
    }
    const existingUser = await User.findOne({ email });
    console.log(existingUser)
    if (!existingUser) {
      return NextResponse.json({ message: "Please register !!!", status: 400 });
    }
    const pass = await hashPassword(password);
    const comparePassword = bcrypt.compare(password, pass);
    console.log(comparePassword)
    if (!comparePassword) {
      return NextResponse.json({
        message: "Password is incorrect ",
        status: 404,
      });
    }

    return NextResponse.json({
      message: "User logged in successfully",
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "server error", status: 500 });
  }
}
