export enum ReportStatusEnum {
    PENDING = "PENDING",
    RESOLVED = "RESOLVED",
    REJECTED = "REJECTED",
}

export const ReportStatusEnumLabels: Record<ReportStatusEnum, string> = {
    [ReportStatusEnum.PENDING]: "Pendiente",
    [ReportStatusEnum.RESOLVED]: "Resuelto",
    [ReportStatusEnum.REJECTED]: "Rechazado",
}