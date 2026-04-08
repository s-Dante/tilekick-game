export enum MatchScenarioEnum {
    STADIUM = 0,
    DESSERT = 1,
    CITY = 2,
    BEACH = 3,
    FROZEN = 4,
}

export const MatchScenarioEnumLabels: Record<MatchScenarioEnum, string> = {
    [MatchScenarioEnum.STADIUM]: "Estadio",
    [MatchScenarioEnum.DESSERT]: "Desierto",
    [MatchScenarioEnum.CITY]: "Ciudad",
    [MatchScenarioEnum.BEACH]: "Playa",
    [MatchScenarioEnum.FROZEN]: "Congelado",
}