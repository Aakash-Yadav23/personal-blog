// pages/api/auth/register.ts


import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

async function POST(req: NextRequest, res: NextApiResponse) {
  try {


    const { email, password, name } = await req.json();


    if (!email || !password || !name) {
      return NextResponse.json({ message: 'Missing Required Fields' }, {
        status: 400
      });

    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ message: 'Email already exists' }, {
        status: 303
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: "USER",
        profession: "Software Developer"

      },
    });


    return NextResponse.json({ message: 'Registration Successfully' }, {
      status: 201
    });

  } catch (error: any) {

    console.error("Error while login", error);
    return NextResponse.json({ message: 'Registration Failed' }, {
      status: 500 // Corrected status code
    });
  }

}





export { POST }