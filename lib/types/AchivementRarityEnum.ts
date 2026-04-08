export enum AchivementRarityEnum {
    COMMON = 0,
    UNCOMMON = 1,
    RARE = 2,
    EPIC = 3,
    LEGENDARY = 4,
}

export const AchivementRarityEnumLabels: Record<AchivementRarityEnum, string> = {
    [AchivementRarityEnum.COMMON]: "Común",
    [AchivementRarityEnum.UNCOMMON]: "Poco común",
    [AchivementRarityEnum.RARE]: "Raro",
    [AchivementRarityEnum.EPIC]: "Épico",
    [AchivementRarityEnum.LEGENDARY]: "Legendario",
}

export const AchivementRarityEnumColors: Record<AchivementRarityEnum, string> = {
    [AchivementRarityEnum.COMMON]: "#9ca3af",
    [AchivementRarityEnum.UNCOMMON]: "#60a5fa",
    [AchivementRarityEnum.RARE]: "#a855f7",
    [AchivementRarityEnum.EPIC]: "#f59e0b",
    [AchivementRarityEnum.LEGENDARY]: "#ef4444",
}