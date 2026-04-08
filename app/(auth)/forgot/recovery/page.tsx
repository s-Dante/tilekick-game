import {
    Button,
    Input,
    Label,
    ForgotStepper,
} from "@/components/index";
import Link from "next/link";


export default function RecoveryPage() {
    return (
        <form className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Olvidaste tu contraseña</h1>
                <p className="text-balance text-muted-foreground">
                    Ingresa tu nueva contraseña
                </p>
            </div>

            <ForgotStepper currentStep={3} />

            <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="password" className="text-sm">Nueva contraseña</Label>
                    <Input id="password" type="password" required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="confirm-password" className="text-sm">Confirmar contraseña</Label>
                    <Input id="confirm-password" type="password" required />
                </div>
                <Button type="submit" className="w-full mt-2 text-lg cursor-pointer">Restablecer Contraseña</Button>
            </div>
        </form>
    );
}