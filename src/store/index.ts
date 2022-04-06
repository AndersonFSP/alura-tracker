import { INotification } from '@/interfaces/INotifications';
import { IProject } from '@/interfaces/IProject'
import { createStore, Store, useStore as VuexUseStore} from 'vuex'
import { InjectionKey } from 'vue'
import { ADD_PROJECT, REMOVE_PROJECT, UPDATE_PROJECT, NOTIFY } from '@/store/types/mutations'

interface IState {
  projects: IProject[]
  notifications: INotification[]
}

export const key: InjectionKey<Store<IState>> = Symbol()

export const store = createStore<IState>({
  state: {
    projects: [],
    notifications: []
  },
  mutations: {
    [ADD_PROJECT](state, name: string) {
      const newProject: IProject = {
        id: new Date().toISOString(),
        name
      }
      state.projects.push(newProject)
    },
    [UPDATE_PROJECT](state, project: IProject) {
      const index = state.projects.findIndex(proj => proj.id === project.id) 
      state.projects[index] = project
    },
    [REMOVE_PROJECT](state, id: string) {
      state.projects = state.projects.filter(project => project.id !== id)
    },
    [NOTIFY](state, newNotification: INotification) {
      newNotification.id = new Date().getTime()
      state.notifications.push(newNotification)
      setTimeout(() => {
        state.notifications = state.notifications.filter(notification => notification.id !== newNotification.id)
      }, newNotification.timer || 3000)
    }
  }
})

export const useStore = (): Store<IState> => VuexUseStore(key)