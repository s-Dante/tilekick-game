"use client";

import {
    Button,
    Input,
    Label,
    ForgotStepper,
} from "@/components/index";
import Link from "next/link";


export default function VerifyEmailPage() {
    return (
        <form className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Olvidaste tu contraseña</h1>
                <p className="text-balance text-muted-foreground">
                    Ingresa tu correo electrónico para restablecer tu contraseña
                </p>
            </div>

            <ForgotStepper currentStep={1} />

            <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email" className="text-sm">Correo electrónico</Label>
                    <Input id="email" type="email" placeholder="tucorreo@example.com" required />
                </div>
                <Button type="submit" className="w-full mt-2 text-lg cursor-pointer">Enviar Token</Button>
            </div>

            <div className="text-center text-sm">
                ¿Ya tienes una cuenta?{" "}
                <Link href="/login" className="underline underline-offset-2 hover:text-primary">
                    Inicia Sesión
                </Link>
            </div>
        </form>
    );
}