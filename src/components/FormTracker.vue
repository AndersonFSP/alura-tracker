<template>
  <div class="box form-tracker">
    <div class="columns">
      <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova label">
        <input 
          type="text"
          class="input"
          v-model="taskDespription"
          placeholder="Qual tarefa você deseja criar ?"
        />
      </div>
      <div class="column is-3">
        <div class="select">
          <select v-model="projectId">
            <option value="">Selecione o projeto</option>
            <option 
              v-for="project in projects" 
              :key="project.id" 
              :value="project.id" 
            >
              {{ project.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <Timer @stopWatchFinished="finishTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Timer from '@/components/Timer.vue'
import { NOTIFY } from '@/store/types/mutations'
import { useStore } from '@/store'
import { NotificationType } from '@/interfaces/INotifications'

export default defineComponent({
  name: 'FormTracker',
  emits: ['onFinishTask'],
  components: {
    Timer,
  },

  data: () => ({
    taskDespription: '',
    projectId: '',
  }),

  methods: {
    finishTask(timer: string): void {
      const project = this.projects.find(project => project.id === this.projectId)
      if(!project) {
        this.store.commit(NOTIFY, {
          title: 'Ops !',
          text: 'Selecione um projeto antes de terminar a tarefa !',
          type: NotificationType.Error
        })
        return 
      }
      const newTask = {
        durationInSeconds: timer,
        description: this.taskDespription,
        project
      }
      this.$emit('onFinishTask', newTask)
      this.taskDespription = ''
    }
  },

  setup() {
    const store = useStore()
    return {
      projects: computed(() => store.state.projects),
      store,
    }
  }
})
</script>
<style>
.form-tracker {
  color:  var(--primary-text);
  background-color: var(--bg-primary);
}
</style>