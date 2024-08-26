import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { prisma, MAX_AGE, COOKIE_NAME } from "@/lib/config";

const jwtSecret = process.env.JWT_SECRET || "";

export async function POST(request: NextRequest) {
  const { username, name, email, password } = await request.json();

  try {
    const hashedPassword = await bcrypt.hashSync(password, 10);
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Already Account, plis signin" },
        { status: 403 }
      );
    } else {
      const newUser = await prisma.user.create({
        data: {
          username: username,
          name: name,
          email: email,
          password: hashedPassword,
        },
      });

      const token = await jwt.sign(
        {
          id: newUser.id,
          name: newUser.name,
          usn: newUser.username,
          email: newUser.email,
        },
        jwtSecret,
        { expiresIn: "1d" }
      );

      const response = NextResponse.json(
        { message: "Create account successfully", newUser, token },
        {
          status: 201,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        }
      );
      response.cookies.set(COOKIE_NAME, token, {
        path: "/",
        maxAge: MAX_AGE,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
      });
      return response;
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong :(" },
      { status: 500 }
    );
  }
}

export function OPTIONS(req: NextRequest) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Credentials": "true",
  };
  return new Response(null, { status: 204, headers });
}
