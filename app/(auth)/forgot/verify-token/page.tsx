"use client";

import {
    Button,
    Label,
    InputOTP,
    InputOTPSeparator,
    InputOTPGroup,
    InputOTPSlot,
    ForgotStepper,
} from "@/components/index";
import Link from "next/link";

export default function VerifyTokenPage() {
    return (
        <form className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Olvidaste tu contraseña</h1>
                <p className="text-balance text-muted-foreground">
                    Ingresa el código de verificación de 6 dígitos que enviamos a tu correo
                </p>
            </div>

            <ForgotStepper currentStep={2} />

            <div className="flex flex-col items-center gap-4 py-2">
                <Label htmlFor="token" className="text-sm font-medium text-foreground">
                    Código de recuperación
                </Label>

                <InputOTP maxLength={6}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} className="w-10 h-10 md:w-12 md:h-12 text-lg md:text-xl" />
                        <InputOTPSlot index={1} className="w-10 h-10 md:w-12 md:h-12 text-lg md:text-xl" />
                        <InputOTPSlot index={2} className="w-10 h-10 md:w-12 md:h-12 text-lg md:text-xl" />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        <InputOTPSlot index={3} className="w-10 h-10 md:w-12 md:h-12 text-lg md:text-xl" />
                        <InputOTPSlot index={4} className="w-10 h-10 md:w-12 md:h-12 text-lg md:text-xl" />
                        <InputOTPSlot index={5} className="w-10 h-10 md:w-12 md:h-12 text-lg md:text-xl" />
                    </InputOTPGroup>
                </InputOTP>

                <div className="text-center text-sm text-muted-foreground mt-2">
                    ¿No recibiste el código?{" "}
                    <button type="button" className="underline underline-offset-2 hover:text-primary font-medium cursor-pointer">
                        Reenviar código
                    </button>
                </div>
            </div>

            <Button type="submit" className="w-full mt-2 text-lg cursor-pointer">Validar Código</Button>
        </form>
    );
}