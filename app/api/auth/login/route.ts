import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt"
import { Prisma } from "@/generated/prisma/client";

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { email, password } = data;

        const userFound = await prisma.user.findUnique({
            where: { email }
        })

        if (!userFound) {
            return NextResponse.json(
                { message: "Credenciales invalidas" },
                { status: 401 }
            );
        }

        const isPasswordValid = await bcrypt.compare(password, userFound.password);

        if (!isPasswordValid) {
            return NextResponse.json(
                { message: "Credenciales invalidas" },
                { status: 401 }
            );
        }

        const { password: _, ...userWithoutPassword } = userFound;

        return NextResponse.json(userWithoutPassword, {
            status: 200,
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "Error interno del servidor" },
            { status: 500 }
        );
    }
}