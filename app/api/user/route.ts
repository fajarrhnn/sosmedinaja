import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest) {
  const token: any = await cookies().get("crsftoken")?.value;
  if (!token) {
    return NextResponse.json({ message: "Token Not Found" }, { status: 403 });
  }

  try {
    const decodeToken = await jwt.decode(token);
    const { name, usn }: any = decodeToken;

    return NextResponse.json(
      { message: "User Profile", user: { name, usn } },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
