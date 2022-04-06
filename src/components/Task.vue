<template>
  <Box>
    <div class="columns">
      <div class="column is-4">
        {{ task.description || 'Tarefa sem descrição' }}
      </div>
      <div class="column is-3">
        {{ task.project?.name || '-' }}
      </div>
      <div class="column">
        <Stopwatch :timeInSeconds="task.durationInSeconds" />
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Stopwatch from './Stopwatch.vue'
import { ITask } from '@/interfaces/ITasks'
import Box from '@/components/Box.vue'

export default defineComponent({
  name: 'Task',
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true,
    }
  },
  components: {
     Stopwatch,
     Box
  },
})
</script>

