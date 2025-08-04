import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json({
        message: "All credentials are required",
        status: 404,
      });
    }
    return NextResponse.json({message:"User registered Successfully"})
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Server error", status: 501 });
  }
}
