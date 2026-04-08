export enum MatchStatusEnum {
    WAITING = 0,
    PLAYING = 1,
    FINISHED = 2,
}

export const MatchStatusEnumLabels: Record<MatchStatusEnum, string> = {
    [MatchStatusEnum.WAITING]: "Esperando",
    [MatchStatusEnum.PLAYING]: "Jugando",
    [MatchStatusEnum.FINISHED]: "Terminado",
}