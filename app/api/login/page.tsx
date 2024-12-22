import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Assuming you have a prisma.ts file with the Prisma client instance

export async function POST(req: Request) {
    try {
        const { publicKey } = await req.json();

        if (!publicKey) {
            return NextResponse.json({ message: 'Public key is required' }, { status: 400 });
        }

        // Check if the user with this public key already exists
        const existingUser = await prisma.user.findUnique({
            where: { publicKey },
        });

        if (existingUser) {
            // If the user exists, return the existing user (login)
            return NextResponse.json({ message: 'User logged in', user: existingUser });
        }

        // If the user does not exist, create a new user
        const newUser = await prisma.user.create({
            data: {
                publicKey,
                profile: '', // Default profile value, you can update later
            },
        });

        return NextResponse.json({ message: 'User created', user: newUser });

    } catch (error) {
        console.error('Error handling request:', error);
        return NextResponse.json({ message: 'Server error', error }, { status: 500 });
    }
}
