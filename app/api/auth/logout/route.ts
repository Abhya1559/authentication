import { serialize } from "cookie";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value;

  if (!token) {
    return NextResponse.json(
      { message: "You are not logged in Login please" },
      { status: 401 }
    );
  }

  const cookie = serialize("token", "", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    expires: new Date(0),
  });

  const response = NextResponse.json(
    { message: "Logout successful" },
    { status: 200 }
  );
  response.headers.set("Set-Cookie", cookie);
  return response;
}
