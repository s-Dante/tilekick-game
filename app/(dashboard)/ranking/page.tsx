import prisma from "@/lib/prisma";
import RankingPodiumCard from "@/components/appComponents/ranking-podium-card";
import RankingList from "@/components/appComponents/ranking-list";
import { Button } from "@/components/index";
import Link from "next/link";

export default async function RankingPage() {
    // Fetch top 25 users with stats
    const topPlayers = await prisma.user.findMany({
        take: 25,
        where: {
            UserStats: {
                isNot: null
            }
        },
        include: {
            UserStats: true
        },
        orderBy: [
            {
                UserStats: {
                    rating: 'desc'
                }
            },
            {
                UserStats: {
                    wins: 'desc'
                }
            }
        ]
    });

    if (topPlayers.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[70vh] gap-6 text-center p-8">
                <div className="space-y-4 max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        El Ranking está vacío
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        ¡Sé el primero en dominar el tablero! Juega una partida clasificada para aparecer en el podio.
                    </p>
                </div>
                <Button asChild size="lg" className="h-14 px-8 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20">
                    <Link href="/play">Empieza a Competir</Link>
                </Button>
            </div>
        );
    }

    const podium = topPlayers.slice(0, 3);
    const tablePlayers = topPlayers.slice(3);

    // Reorder podium so 1st place is in middle (2nd, 1st, 3rd)
    const displayPodium = [
        { ...podium[1], position: 2, medal: "🥈" },
        { ...podium[0], position: 1, medal: "🥇" },
        { ...podium[2], position: 3, medal: "🥉" }
    ].filter(p => !!p.id); // Filter out in case there are < 3 players

    return (
        <div className="flex flex-col gap-12 p-6 md:p-8 max-w-7xl mx-auto w-full pb-20">
            {/* Page Header */}
            <header className="flex flex-col items-center text-center gap-2">
                <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">Ranking Global</h1>
                <p className="text-muted-foreground text-lg">Los mejores estrategas de Tilekick</p>
            </header>

            {/* Podium Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end pt-10">
                {displayPodium.map((p) => (
                    <RankingPodiumCard
                        key={p.id}
                        user={p as any}
                        position={p.position}
                        medal={p.medal}
                    />
                ))}
            </section>

            {/* List Section */}
            <section className="flex flex-col gap-6 mt-8">
                <div className="flex items-center justify-between border-b pb-4">
                    <h2 className="text-2xl font-bold tracking-tight">Top Competidores</h2>
                    <span className="text-sm font-medium bg-muted px-3 py-1 rounded-full text-muted-foreground">
                        Mostrando mejores 25
                    </span>
                </div>
                <RankingList players={tablePlayers} />
            </section>
        </div>
    );
}
