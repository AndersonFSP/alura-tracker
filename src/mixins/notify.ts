import { INotification } from "@/interfaces/INotifications"
import { NOTIFY } from "@/store/types/mutations"
import { store } from '@/store' 

export const notifyMixin = {
  methods: {
    notify(notification: Omit<INotification, 'id'>): void {
      store.commit(NOTIFY, notification)
    }
  }
}