export enum MatchDifficultyEnum {
    EASY = 0,
    MEDIUM = 1,
    HARD = 2,
}

export const MatchDifficultyEnumLabels: Record<MatchDifficultyEnum, string> = {
    [MatchDifficultyEnum.EASY]: "Fácil",
    [MatchDifficultyEnum.MEDIUM]: "Medio",
    [MatchDifficultyEnum.HARD]: "Difícil",
}