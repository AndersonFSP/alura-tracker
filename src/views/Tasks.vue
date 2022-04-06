<template>
    <div class="column is-three-quarter content">
      <FormTracker @onFinishTask="saveTask"/>
      <div class="lista">
        <Box v-if="hasEmptyTasks">
          <p>Você não está produtivo hoje</p>
        </Box>
        <Task
          v-for="(task, index) in tasks" 
          :key="index"
          :task="task"
        />
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormTracker from '@/components/FormTracker.vue'
import Task from '@/components/Task.vue'
import { ITask } from '@/interfaces/ITasks'
import Box from '@/components/Box.vue';

export default defineComponent({
  name: 'App',
  components: {
    FormTracker,
    Task,
    Box
  },

  data: () => ({
    tasks: [] as ITask[],
  }),

  computed: {
    hasEmptyTasks(): boolean {
      return this.tasks.length === 0
    },
  },

  methods: {
    saveTask(task: ITask): void {
      this.tasks.push(task)
    },
  }
});
</script>
