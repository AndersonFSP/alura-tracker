<template>
  <div class="box form-tracker">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova label">
        <input 
          type="text"
          class="input"
          v-model="taskDespription"
          placeholder="Qual tarefa você deseja criar ?"
        />
      </div>
      <div class="column">
        <Timer @stopWatchFinished="finishTask" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Timer from '@/components/Timer.vue'

export default defineComponent({
  name: 'FormTracker',
  emits: ['onFinishTask'],
  components: {
    Timer,
  },
  data: () => ({
    taskDespription: '',
  }),
  methods: {
    finishTask(timer: string) {
      const newTask = {
        durationInSeconds: timer,
        description: this.taskDespription
      }
      this.$emit('onFinishTask', newTask)
      this.taskDespription = ''
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