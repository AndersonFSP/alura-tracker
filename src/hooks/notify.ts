import { INotification } from "@/interfaces/INotifications";
import { store } from '@/store' 
import { NOTIFY } from "@/store/types/mutations";
type Notify = {
  notify(type: Omit<INotification, 'id'>): void
}

export default (): Notify => {
  const notify = (notification: Omit<INotification, 'id'>): void => {
    store.commit(NOTIFY, notification)
  }

  return { notify }
}