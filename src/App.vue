<template>
  <main class="columns is-gapless is-multiline" :class="{'dark-mode' : modeTheme}">
    <div class="column is-one-quarter">
      <SideBar @themeChanged="changeTheme" />
    </div>
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
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from '@/components/SideBar.vue'
import FormTracker from '@/components/FormTracker.vue'
import Task from '@/components/Task.vue'
import { ITask } from './interfaces/ITasks'
import Box from './components/Box.vue';

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    FormTracker,
    Task,
    Box
  },

  data: () => ({
    tasks: [] as ITask[],
    isDarkModeActived: false
  }),

  computed: {
    hasEmptyTasks(): boolean {
      return this.tasks.length === 0
    },
    modeTheme() {
      return this.isDarkModeActived ? 'dark-mode' : ''
    }
  },

  methods: {
    saveTask(task: ITask): void {
      this.tasks.push(task)
    },
    changeTheme(isDarkModeActived: boolean): void {
      this.isDarkModeActived = isDarkModeActived
    }
  }
});
</script>

<style scoped>
  .lista {
    padding: 1.25rem;
  }
  main {
    --bg-primary: #fff;
    --primary-text: #000;
  }
  main.dark-mode {
    --bg-primary: #2b2d42;
    --primary-text: #ddd;
  }
  .content {
    background-color: var(--bg-primary);
  }
</style>
