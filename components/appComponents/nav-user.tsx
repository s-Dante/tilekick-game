"use client";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/index"
import {
    EllipsisVerticalIcon,
    UserIcon,
    CreditCardIcon,
    BellIcon,
    LogOutIcon,
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { signOut } from "next-auth/react";
import { generateUserAvatarFallback } from "@/lib/utils/index";
import Link from "next/link";


interface NavUserProps {
    className?: string;
    user?: {
        username?: string | null | undefined;
        email?: string | null | undefined;
        avatar?: string | null | undefined;
        image?: string | null | undefined;
    }
}

export default function NavUser({ className, user }: NavUserProps) {
    const { isMobile } = useSidebar();

    if (!user) {
        return <SidebarMenu><SidebarMenuItem className="h-12" /></SidebarMenu>;
    }

    const safeName = user.username || "Usuario";
    const safeEmail = user.email || "";
    const safeAvatar = user.avatar || user.image || "";

    const initials = generateUserAvatarFallback(safeName);
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground h-20 rounded-2xl"
                        >
                            <Avatar className="h-9 w-9 rounded-lg grayscale">
                                <AvatarImage src={safeAvatar} alt={safeName} />
                                <AvatarFallback className="rounded-lg">{initials}</AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-base leading-tight">
                                <span className="truncate font-semibold">{safeName}</span>
                                <span className="truncate text-xs text-muted-foreground">
                                    {user.email}
                                </span>
                            </div>
                            <EllipsisVerticalIcon className="ml-auto size-5" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-0 font-normal">
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <Avatar className="h-8 w-8 rounded-lg">
                                    <AvatarImage src={safeAvatar} alt={safeName} />
                                    <AvatarFallback className="rounded-lg">{initials}</AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium">{safeName}</span>
                                    <span className="truncate text-xs text-muted-foreground">
                                        {safeEmail}
                                    </span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <div className="flex items-center justify-between px-2 py-1.5">
                                <span className="text-xs font-medium text-muted-foreground">Tema</span>
                                <ThemeToggle />
                            </div>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href="/profile">
                                    <UserIcon />
                                    Perfil
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
                                <LogOutIcon />
                                Cerrar Sesión
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}