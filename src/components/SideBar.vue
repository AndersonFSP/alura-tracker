<template>
  <header>
    <h1>
      <img src=".././assets/logo.png" >
    </h1>
    <Button :text="butonText" icon="fa-pen" @click="changeTheme" />
  </header>
</template>
<script lang="ts"> 
import { defineComponent } from 'vue';
import Button from './Button.vue';

export default defineComponent({
  name: 'SideBar',
  emits: ['themeChanged'],
  components: { Button },

  data: () => ({
    isDarkModeActived: false
  }),

  computed: {
    butonText(): string {
      return this.isDarkModeActived ? 'Desativar modo escuro' : 'Ativar modo escuro' 
    }
  },

  methods: {
    changeTheme(): void {
      this.isDarkModeActived = !this.isDarkModeActived
      this.$emit('themeChanged', this.isDarkModeActived)
    }
  }
})
</script>

<style scoped>
  header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    header {
      padding: 2.5rem;
      height: auto;
    }
  }
</style>