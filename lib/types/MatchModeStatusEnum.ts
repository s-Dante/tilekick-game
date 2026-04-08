export enum MatchModeStatusEnum {
    MULTIPLAYER = 0,
    SINGLEPLAYER = 1,
    AI = 2,
}

export const MatchModeStatusEnumLabels: Record<MatchModeStatusEnum, string> = {
    [MatchModeStatusEnum.MULTIPLAYER]: "Multijugador",
    [MatchModeStatusEnum.SINGLEPLAYER]: "Un jugador",
    [MatchModeStatusEnum.AI]: "IA",
}