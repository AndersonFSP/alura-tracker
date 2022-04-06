export enum NotificationType {
  Success,
  Error,
  Warning
}

export interface INotification {
  title: string
  text: string
  type: NotificationType
  id: number
  timer?: number 
}
