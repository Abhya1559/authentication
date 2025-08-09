import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    const cookie = serialize("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    const res = NextResponse.json(
      { message: "Login successful" },
      { status: 200 }
    );
    res.headers.set("Set-Cookie", cookie);
    return res;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}
