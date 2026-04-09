"use client";

import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/index";
import Link from "next/link";

interface NavMainProps {
    className?: string;
    items: {
        title: string,
        url: string,
        icon?: React.ElementType,
    }[];
}
export default function NavMain({ className, items }: NavMainProps) {
    return (
        <SidebarGroup>
            <SidebarGroupContent className="flex flex-col gap-2">
                <SidebarMenu className="gap-2">
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild
                                size="lg"
                                className="text-lg font-bold py-8 px-6 h-20 rounded-2xl mb-1 hover:scale-[1.02] transition-transform"
                            >
                                <Link href={item.url}>
                                    {item.icon && <item.icon className="!size-6 mr-1" />}
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}