export type NotificationEnum = "success" | "info" | "warning" | "error"

interface NotificationType {
    message: string;
    type: NotificationEnum;
    description?: string;
}