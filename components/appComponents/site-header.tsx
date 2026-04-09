"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { RoutesEnum } from "@/lib/types";
import Link from "next/link";

interface SiteHeaderProps { }

export default function SiteHeader({ }: SiteHeaderProps) {
    const pathname = usePathname();
    const currentTitle = RoutesEnum[pathname as keyof typeof RoutesEnum] || 'TILEKICK';
    return (
        <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
            <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
                <SidebarTrigger className="-ml-1 cursor-pointer" />
                <Separator
                    orientation="vertical"
                    className="mx-2 data-[orientation=vertical]:h-6 data-[orientation=vertical]:w-0.5 mt-1"
                />
                <h1 className="text-base font-medium">{currentTitle}</h1>
                <div className="ml-auto flex items-center gap-2">
                    <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
                        <Link
                            href="https://core-memories.vercel.app"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="dark:text-foreground uppercase font-bold"
                        >
                            CoreMemories
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}