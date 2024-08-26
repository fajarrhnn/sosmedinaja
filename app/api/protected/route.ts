import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const jwtSecret: any = process.env.JWT_SECRET;

export async function GET(request: NextRequest) {
  const token = await cookies().get("crsftoken")?.value;
  if (!token) {
    return NextResponse.json({ message: "Token Not Found" }, { status: 403 });
  }

  try {
    const decodeToken = jwt.verify(token, jwtSecret);
    const { name, usn, id }: any = decodeToken;

    return NextResponse.json(
      { message: "User Profile", user: { name, usn, id } },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
