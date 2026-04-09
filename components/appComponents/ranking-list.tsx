"use client";

import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Avatar,
    AvatarFallback,
    AvatarImage,
    Badge,
    Button
} from "@/components/index";
import { generateUserAvatarFallback } from "@/lib/utils/index";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface RankingListProps {
    players: any[];
}

export default function RankingList({ players }: RankingListProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 11;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = players.slice(startIndex, endIndex);
    const totalPages = Math.ceil(players.length / itemsPerPage);

    return (
        <div className="flex flex-col gap-4">
            <div className="rounded-2xl border bg-card overflow-hidden shadow-sm">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead className="w-20 text-center font-bold">Rango</TableHead>
                            <TableHead>Jugador</TableHead>
                            <TableHead className="text-center">Rating</TableHead>
                            <TableHead className="text-center">Total Partidas</TableHead>
                            <TableHead className="text-center">V / D</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentItems.map((player, index) => {
                            const rank = startIndex + index + 4; // Start from rank 4
                            const stats = player.UserStats;
                            const initials = generateUserAvatarFallback(player.username);
                            const avatarSrc = player.avatar || player.image || "";
                            
                            return (
                                <TableRow key={player.id} className="h-16">
                                    <TableCell className="text-center font-mono text-lg font-bold text-muted-foreground">
                                        #{rank}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar className="size-10 border">
                                                <AvatarImage src={avatarSrc} alt={player.username} />
                                                <AvatarFallback>{initials}</AvatarFallback>
                                            </Avatar>
                                            <span className="font-semibold">{player.username}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <Badge variant="secondary" className="font-mono px-3">
                                            {stats?.rating || 0}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-center font-medium">
                                        {stats?.totalMatches || 0}
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <span className="text-primary font-bold">{stats?.wins || 0}</span>
                                            <span className="text-muted-foreground">/</span>
                                            <span className="text-destructive/80 font-bold">{stats?.losses || 0}</span>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex items-center justify-between px-2 py-4">
                    <p className="text-sm text-muted-foreground">
                        Mostrando <span className="font-medium">{startIndex + 1}</span> a <span className="font-medium">{Math.min(endIndex, players.length)}</span> de <span className="font-medium">{players.length}</span> jugadores
                    </p>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="rounded-xl h-10 px-4"
                        >
                            <ChevronLeftIcon className="size-4 mr-2" />
                            Anterior
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="rounded-xl h-10 px-4"
                        >
                            Siguiente
                            <ChevronRightIcon className="size-4 ml-2" />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
