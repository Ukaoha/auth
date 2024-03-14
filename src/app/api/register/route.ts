import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/utils/connect";

export async function POST(req: Request) {
  try {
    const { fullName, email, password } = await req.json();

    const hashedPass = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPass,
      },
    });
    return new NextResponse(
      JSON.stringify({
        message: "registration suscessfull",
        status: 201,
      })
    );
  } catch (e: any) {
    return new NextResponse(
      JSON.stringify({
        message: "something went wrong",
        status: 500,
      })
    );
  }
}
