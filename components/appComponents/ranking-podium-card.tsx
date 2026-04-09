import {
    Card,
    CardContent,
    CardHeader,
    Avatar,
    AvatarFallback,
    AvatarImage,
    Badge
} from "@/components/index";
import { cn } from "@/lib/utils";
import { generateUserAvatarFallback } from "@/lib/utils/index";
import { TrophyIcon } from "lucide-react";

interface RankingPodiumCardProps {
    user: {
        username: string;
        avatar?: string | null;
        image?: string | null;
        UserStats?: {
            rating: number;
            wins: number;
            losses: number;
        } | null;
    };
    position: number;
    medal: string;
}

export default function RankingPodiumCard({ user, position, medal }: RankingPodiumCardProps) {
    const isFirst = position === 1;
    const stats = user.UserStats;
    const initials = generateUserAvatarFallback(user.username);
    const avatarSrc = user.avatar || user.image || "";

    return (
        <Card className={cn(
            "flex flex-col items-center relative overflow-hidden transition-all duration-300 hover:shadow-xl border-2",
            isFirst ? "scale-110 z-10 border-primary bg-primary/5 h-[340px]" : "h-[280px] mt-8 bg-card/50",
            position === 2 ? "border-slate-300" : "",
            position === 3 ? "border-amber-600/50" : ""
        )}>
            {/* Rank Badge */}
            <div className={cn(
                "absolute top-4 right-4 text-3xl",
                isFirst && "scale-125"
            )}>
                {medal}
            </div>

            <CardHeader className="flex flex-col items-center pt-8">
                <div className="relative">
                    <Avatar className={cn(
                        "rounded-full border-4",
                        isFirst ? "size-24 border-primary" : "size-20 border-muted"
                    )}>
                        <AvatarImage src={avatarSrc} alt={user.username} />
                        <AvatarFallback className="text-xl font-bold">{initials}</AvatarFallback>
                    </Avatar>
                    {isFirst && (
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-primary animate-bounce">
                            <TrophyIcon className="size-8 fill-primary" />
                        </div>
                    )}
                </div>
                <div className="mt-4 text-center">
                    <h3 className={cn(
                        "font-bold truncate max-w-[140px]",
                        isFirst ? "text-xl" : "text-lg"
                    )}>
                        {user.username}
                    </h3>
                    <Badge variant={isFirst ? "default" : "outline"} className="mt-1">
                       {stats?.rating || 0} PTS
                    </Badge>
                </div>
            </CardHeader>

            <CardContent className="w-full px-6 py-2">
                <div className="flex justify-between items-center text-sm border-t border-primary/10 pt-4">
                    <div className="flex flex-col items-center">
                        <span className="text-muted-foreground text-xs uppercase font-bold tracking-wider">Victorias</span>
                        <span className="font-bold text-primary">{stats?.wins || 0}</span>
                    </div>
                    <div className="h-8 w-px bg-primary/10" />
                    <div className="flex flex-col items-center">
                        <span className="text-muted-foreground text-xs uppercase font-bold tracking-wider">Derrotas</span>
                        <span className="font-bold text-destructive/80">{stats?.losses || 0}</span>
                    </div>
                </div>
                
                {isFirst && (
                    <div className="mt-4 flex justify-center">
                        <span className="text-xs font-medium bg-primary/20 text-primary px-3 py-1 rounded-full uppercase tracking-tighter">
                            Campeón Invictus
                        </span>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
