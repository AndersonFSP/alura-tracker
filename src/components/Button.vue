<template>
  <button class="button" :disabled="disabled">
    <span class="icon">
      <i :class="['fas', icon]"></i>
    </span>
    <span>{{ text }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Button',
  props: {
    text: {
      type: String, 
      required: true
    },
    icon: {
      type: String,
      required: true 
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  }
})
</script>

<style>

</style>