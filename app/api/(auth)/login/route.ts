import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { prisma, MAX_AGE, COOKIE_NAME } from "@/lib/config";

const jwtSecret = process.env.JWT_SECRET || "";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!existingUser) {
      return NextResponse.json(
        { message: "Email is not registered! Please SignUp." },
        { status: 403 }
      );
    } else {
      const passwordMatch = await bcrypt.compareSync(
        password,
        existingUser.password
      );
      if (!passwordMatch) {
        return NextResponse.json(
          { message: "Incorrect email or password" },
          { status: 401 }
        );
      }

      const user = {
        id: existingUser.id,
        name: existingUser.name,
        usn: existingUser.username,
        email: existingUser.email,
      };
      const token = await jwt.sign(user, jwtSecret, { expiresIn: "1d" });

      const response = NextResponse.json(
        { message: "Login account successfully", user, token },
        {
          status: 200,
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
