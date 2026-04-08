import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { FeaturedCard } from "@/components/index";
import { UsersRound, Globe, UserRound, Bot, ChartBarIncreasing } from "lucide-react";

export default function Home() {
  return (
    <main id="main-content" className="w-full mx-auto flex-1 flex flex-col py-10">
      <section className="flex-1 flex flex-col items-center gap-8 mt-10">

        {/* --- CABECERA (Título y Subtítulo) --- */}
        <div className="flex flex-col items-center gap-4">
          <h1
            className="text-center animate-fade-up font-extrabold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl uppercase"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            Tilekick
          </h1>
          <span
            className="text-center animate-fade-up text-xl text-muted-foreground sm:text-2xl md:text-3xl"
            style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
          >
            Arma tu estrategia y {" "}
            <span className="text-primary bg-primary/10 rounded-sm px-2 font-medium">Gana</span>
            {" "}el torneo
          </span>
        </div>

        {/* --- BOTÓN --- */}
        <div
          className="animate-fade-up flex items-center gap-4"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <Link
            href="/login"
            className={cn(buttonVariants({ variant: "default", size: "lg" }), "cursor-pointer h-12 w-auto text-2xl")}
          >
            Jugar Ahora
          </Link>
        </div>

        <div
          className="w-full grid grid-cols-1 sm:grid-cols-4 gap-4 animate-fade-up mt-8 px-10"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          <FeaturedCard
            icon1={<UsersRound size={20} />}
            icon2={<Globe size={20} />}
            title="Multijugador Online"
            description="Desafía a jugadores de todo el mundo."
            content="Compite en ligas globales o crea salas privadas para jugar con amigos."
          />

          <FeaturedCard
            icon1={<UserRound size={20} />}
            icon2={<UserRound size={20} />}
            title="Multijugador Local"
            description="Juega contra tus amigos en un mismo dispositivo"
            content="Desafía a tus amigos en partidas rápidas o torneos locales."
            footer="Pass & Play"
          />

          <FeaturedCard
            icon1={<UserRound size={20} />}
            icon2={<Bot size={20} />}
            title="Clasificatorias"
            description="SPerfecciona tu táctica contra la IA."
            content="Enfrenta a bots de distintas dificultades para probar nuevas estrategias antes del torneo."
            footer="Práctica offline"
          />

          <FeaturedCard
            icon1={<UserRound size={20} />}
            icon2={<ChartBarIncreasing size={20} />}
            title="Rankings"
            description="Compara tu nivel con el resto."
            content="Compite en ligas globales o crea salas privadas para jugar con amigos."
            footer="Datos en tiempo real"
          />
        </div>
      </section>
    </main>
  );
}
