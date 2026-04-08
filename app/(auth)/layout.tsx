import { Card, CardContent } from "@/components/index";

interface AuthLayoutProps {
    children: React.ReactNode;
    imgSrc?: string;
    imgAlt?: string;
}

export default function AuthLayout({
    children,
    imgSrc,
    imgAlt
}: AuthLayoutProps) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-4xl">
                <Card className="overflow-hidden p-0">
                    <CardContent className="grid p-0 md:grid-cols-2 min-h-[500px]">
                        <div className="p-6 md:p-8 flex flex-col justify-center">
                            {children}
                        </div>
                        <div className="relative hidden bg-muted md:block">
                            <img
                                src={imgSrc || "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80"}
                                alt={imgAlt || "Authentication Background"}
                                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}