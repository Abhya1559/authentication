import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";
import { hashPassword } from "@/lib/hash";

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const { name, email, password } = body;
    if (!name || !email || !password) {
      return NextResponse.json({
        message: "All credentials are required",
        status: 404,
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({
        message: "User already registered",
        status: 400,
      });
    }

    const hashedPassword = await hashPassword(password);
    console.log(hashPassword);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    console.log(user);
    await user.save();
    return NextResponse.json({
      message: "User registered Successfully",
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Server error", status: 501 });
  }
}
