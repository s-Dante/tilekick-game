import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt"
import { Prisma } from "@/generated/prisma/client";

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { confirmPassword, ...userData } = data;
        if (userData.password !== confirmPassword) {
            return NextResponse.json(
                { message: "Las contraseñas no coinciden" },
                { status: 400 }
            );
        }

        const salt = await bcrypt.genSalt(11)
        userData.password = await bcrypt.hash(userData.password, salt)

        const newUser = await prisma.user.create({
            data: userData
        });

        const { password, ...userWithoutPassword } = newUser;

        return NextResponse.json(userWithoutPassword, {
            status: 201,
        })

    } catch (error) {
        // // 2. Aquí interceptamos el error específico de Prisma
        // if (error instanceof Prisma.PrismaClientKnownRequestError) {
        //     console.log("\n❌ --- ERROR DE PRISMA ---");
        //     console.log("Código de error:", error.code);
        //     console.log("Metadatos (qué campo falló):", error.meta);
        //     console.log("Mensaje completo:", error.message);
        //     console.log("---------------------------\n");

        //     // Manejo de errores comunes para el frontend
        //     if (error.code === 'P2002') {
        //         return NextResponse.json(
        //             { message: "El correo o nombre de usuario ya está registrado." },
        //             { status: 400 }
        //         );
        //     }
        // } else {
        //     // Si es un error diferente (no de la BD)
        //     console.error("Error desconocido al registrar:", error);
        // }

        return NextResponse.json(
            { message: "Hubo un error interno en el servidor." },
            { status: 500 }
        );
    }
}