export enum FriendshipStatusEnum {
    PENDING = 0,
    ACCEPTED = 1,
    REJECTED = 2,
    BLOCKED = 3,
}

export const FriendshipStatusEnumLabels: Record<FriendshipStatusEnum, string> = {
    [FriendshipStatusEnum.PENDING]: "Pendiente",
    [FriendshipStatusEnum.ACCEPTED]: "Aceptada",
    [FriendshipStatusEnum.REJECTED]: "Rechazada",
    [FriendshipStatusEnum.BLOCKED]: "Bloqueada",
}