<template>
  <main class="columns is-gapless is-multiline" :class="{'dark-mode' : modeTheme}">
    <div class="column is-one-quarter">
      <SideBar @themeChanged="changeTheme" />
    </div>
    <div class="column is-three-quarter content">
      <Notification />
      <router-view />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SideBar from '@/components/SideBar.vue'
import Notification from '@/components/Notification.vue';

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    Notification,
  },

  data: () => ({
    isDarkModeActived: false
  }),

  computed: {
    modeTheme() {
      return this.isDarkModeActived ? 'dark-mode' : ''
    }
  },

  methods: {
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
