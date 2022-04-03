<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Stopwatch :timeInSeconds="timeInSeconds"/>
    <Button
      text="play"
      icon="fa-play"
      @click="startTimer" 
      :disabled="isStopWatchStart"
    />
    <Button
      text="stop"
      icon="fa-stop"
      @click="endTimer" 
      :disabled="!isStopWatchStart"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Stopwatch from '@/components/Stopwatch.vue'
import Button from '@/components/Button.vue'

export default defineComponent({
  name: 'Timer',
  emit: ['stopWatchFinished'],
  components: {
    Stopwatch,
    Button
  },

  data: () => ({
    timeInSeconds: 0,
    stopwatch: 0,
  }),
  
  computed: {
    isStopWatchStart(): boolean {
      return Boolean(this.timeInSeconds)
    }
  },

  methods: {
    startTimer(): void {
      this.stopwatch = setInterval(() => {
        this.timeInSeconds +=1
      }, 1000)
    },
    endTimer(): void {
      clearInterval(this.stopwatch)
      this.$emit('stopWatchFinished', this.timeInSeconds)
      this.timeInSeconds = 0
    }
  }
})
</script>