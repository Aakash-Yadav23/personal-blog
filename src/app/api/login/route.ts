// pages/api/auth/login.ts


import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

async function POST(req: Request, res: NextApiResponse) {
  try {


    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password is required' });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      return NextResponse.json({ message: 'Invalid email or password' }, {
        status: 401
      });
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid email or password' }, {
        status: 401
      });

    }

    // Successful login logic (e.g., generate a session token)
    // Replace with your session management logic (e.g., using NextAuth.js)
    return res.status(200).json({ message: 'Login successful', user: existingUser });
  } catch (error: any) {
    console.log("Error while login", error);
    throw new Error(error.message);
  }
}





export { POST }