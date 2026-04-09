import { TrophyIcon, UsersIcon, ZapIcon } from "lucide-react";
import FeaturedCard from "@/components/landingPageComponents/featured-card";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="flex flex-col gap-8 p-6 md:p-8 max-w-7xl mx-auto w-full">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Juega estratégicamente y diviértete
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    Domina el tablero, desafía a tus amigos y conviértete en una leyenda de Tilekick.
                </p>
            </section>

            {/* Game Modes Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeaturedCard
                    icon1={<TrophyIcon className="size-6" />}
                    title="Modo Clasificado"
                    description="Compite contra los mejores"
                    content="Sube en el ranking global y gana recompensas exclusivas por tu desempeño estratégico."
                    footer="Nivel requerido: 1"
                />
                <FeaturedCard
                    icon1={<UsersIcon className="size-6" />}
                    title="Modo Amistoso"
                    description="Juega sin presiones"
                    content="Invita a tus amigos a partidas casuales para practicar nuevas tácticas y pasar un buen rato."
                    footer="Ideal para principiantes"
                />
                <FeaturedCard
                    icon1={<ZapIcon className="size-6" />}
                    title="Modo Torneo"
                    description="Eventos especiales"
                    content="Participa en torneos semanales con reglas únicas y premios masivos para los ganadores."
                    footer="Próximamente"
                />
            </section>

            {/* Quick Stats or Call to Action could go here */}
            <div className="mt-8 p-8 rounded-3xl bg-primary/5 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h2 className="text-2xl font-bold">¿Listo para empezar tu primera partida?</h2>
                    <p className="text-muted-foreground">Elige un modo de juego y demuestra tus habilidades.</p>
                </div>
                <Link
                    href="/play"
                    className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20"
                >
                    Jugar Ahora
                </Link>
            </div>
        </div>
    );
}