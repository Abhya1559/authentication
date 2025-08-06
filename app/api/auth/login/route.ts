import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/User";
import { hashPassword } from "@/lib/hash";
import { connectDB } from "@/lib/db";
import bcrypt from "bcryptjs";
import { generateToken } from "@/lib/jwt";
import { serialize } from "cookie";

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
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return NextResponse.json({ message: "Please register !!!", status: 400 });
    }
    const pass = await hashPassword(password);
    const comparePassword = bcrypt.compare(password, pass);

    console.log(comparePassword);
    if (!comparePassword) {
      return NextResponse.json({
        message: "Password is incorrect ",
        status: 404,
      });
    }

    const token = generateToken({ id: user._id, email: user.email });

    const cookie = serialize("token", token, {
      httpOnly: true,
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    const response = NextResponse.json(
      {
        message: "User logged in successfully",
        user: { id: user._id, name: user.name, email: user.email },
      },
      { status: 200 }
    );
    response.headers.set("set-cookie", cookie);
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "server error", status: 500 });
  }
}
