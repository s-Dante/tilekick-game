import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import {
    Card,
    CardContent,
    CardHeader,
    Avatar,
    AvatarFallback,
    AvatarImage,
    Badge,
} from "@/components/index";
import { generateUserAvatarFallback } from "@/lib/utils/index";
import { TrophyIcon, CalendarIcon, MailIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";

export default async function ProfilePage() {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
        redirect("/login");
    }

    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
        include: { UserStats: true }
    });

    if (!user) {
        return <div>Usuario no encontrado</div>;
    }

    const stats = user.UserStats;
    const initials = generateUserAvatarFallback(user.username);
    const avatarSrc = user.avatar || "";
    const joinDate = new Date(user.createdAt).toLocaleDateString("es-ES", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="flex items-center justify-center min-h-[80vh] p-6">
            <Card className="w-full max-w-2xl border-2 shadow-2xl overflow-hidden rounded-3xl">
                <div className="h-32 bg-primary/50 border-b" />

                <CardHeader className="relative flex flex-col items-center -mt-16 pb-0">
                    <Avatar className="size-32 border-4 border-background shadow-xl">
                        <AvatarImage src={avatarSrc} alt={user.username} />
                        <AvatarFallback className="text-3xl font-bold">{initials}</AvatarFallback>
                    </Avatar>
                    <div className="mt-4 text-center">
                        <h1 className="text-3xl font-extrabold tracking-tight">{user.username}</h1>
                        <p className="text-muted-foreground flex items-center justify-center gap-2 mt-1">
                            <MailIcon className="size-4" />
                            {user.email}
                        </p>
                    </div>
                </CardHeader>

                <CardContent className="p-8 space-y-8">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex flex-col items-center p-4 rounded-2xl bg-muted/50 border">
                            <TrophyIcon className="size-6 text-primary mb-2" />
                            <span className="text-2xl font-bold">{stats?.rating || 1011}</span>
                            <span className="text-xs text-muted-foreground uppercase font-semibold">Rating</span>
                        </div>
                        <div className="flex flex-col items-center p-4 rounded-2xl bg-muted/50 border">
                            <span className="text-2xl font-bold text-primary">{stats?.wins || 0}</span>
                            <span className="text-xs text-muted-foreground uppercase font-semibold">Victorias</span>
                        </div>
                        <div className="flex flex-col items-center p-4 rounded-2xl bg-muted/50 border">
                            <span className="text-2xl font-bold text-destructive/70">{stats?.losses || 0}</span>
                            <span className="text-xs text-muted-foreground uppercase font-semibold">Derrotas</span>
                        </div>
                        <div className="flex flex-col items-center p-4 rounded-2xl bg-muted/50 border">
                            <span className="text-2xl font-bold">{stats?.totalMatches || 0}</span>
                            <span className="text-xs text-muted-foreground uppercase font-semibold">Partidas</span>
                        </div>
                    </div>

                    {/* Metadata Section */}
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground border-t pt-6 gap-4">
                        <div className="flex items-center gap-2">
                            <CalendarIcon className="size-4" />
                            <span>Miembro desde {joinDate}</span>
                        </div>
                        <Badge variant="secondary" className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                            Estado: Activo
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
