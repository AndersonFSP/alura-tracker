<template>
  <button class="button" :disabled="disabled">
    <span class="icon" v-if="icon">
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
      default: ''
    },
    icon: {
      type: String,
      required: false 
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