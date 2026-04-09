"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    NavUser,
    NavMain,
    NavFooter
} from "@/components/index"
import {
    ChartColumnIncreasingIcon,
    SwordsIcon,
    CogIcon,
} from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const navData = {
    navMainItems: [
        {
            title: "Jugar",
            url: "/play",
            icon: SwordsIcon
        },
        {
            title: "Ranking",
            url: "/ranking",
            icon: ChartColumnIncreasingIcon
        }
    ],
    navFooterItems: [
        {
            title: "Ajustes",
            url: "/settings",
            icon: CogIcon
        },
    ],
}
export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { data: session } = useSession();
    const user = session?.user;

    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader className="py-6 border-b border-sidebar-border">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <div className="flex flex-col items-center justify-center w-full">
                            <Link href="/home" className="flex items-center justify-center">
                                <span
                                    className="font-extrabold uppercase text-3xl tracking-widest text-primary drop-shadow-sm"
                                >
                                    Tilekick
                                </span>
                            </Link>
                        </div>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent className="gap-6">
                <NavMain items={navData.navMainItems} />
                <NavFooter items={navData.navFooterItems} className="mt-auto" />
            </SidebarContent>

            <SidebarFooter>
                <NavUser user={user} />
            </SidebarFooter>
        </Sidebar>
    )
}