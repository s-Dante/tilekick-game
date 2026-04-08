import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const STEPS = [
    "Verificar Correo",
    "Ingresar Token",
    "Cambiar Clave"
];

interface ForgotStepperProps {
    currentStep: 1 | 2 | 3;
}

export default function ForgotStepper({ currentStep }: ForgotStepperProps) {
    return (
        <div className="flex items-start justify-between w-full relative pt-2 pb-4">
            {STEPS.map((label, i) => {
                const step = i + 1;
                const isDone = step < currentStep;
                const isActive = step === currentStep;
                const isLast = i === STEPS.length - 1;

                return (
                    <div key={step} className="relative flex flex-col items-center flex-1">
                        {/* Connecting Line */}
                        {!isLast && (
                            <div className={cn(
                                "absolute top-[14px] left-1/2 w-full h-[2px] transition-colors",
                                isDone ? "bg-primary" : "bg-muted"
                            )} />
                        )}

                        {/* Circle */}
                        <div className={cn(
                            "relative z-10 w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-semibold transition-all duration-200",
                            isDone
                                ? "bg-primary border-primary text-primary-foreground"
                                : isActive
                                    ? "bg-background border-primary text-primary ring-4 ring-primary/10"
                                    : "bg-background border-muted text-muted-foreground"
                        )}>
                            {isDone ? <Check className="w-3.5 h-3.5" /> : step}
                        </div>

                        {/* Label */}
                        <span className={cn(
                            "text-[11px] md:text-xs text-center mt-3 font-medium leading-tight max-w-[80%] md:max-w-[100px]",
                            isActive ? "text-primary" : isDone ? "text-foreground" : "text-muted-foreground"
                        )}>
                            {label}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}