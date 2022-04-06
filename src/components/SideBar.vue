<template>
  <header>
    <h1>
      <img src=".././assets/logo.png" >
    </h1>
    <Button :text="butonText" icon="fa-pen" @click="changeTheme" />
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks"> Tarefas</i>
          </router-link>
        </li>
        <li>
          <router-link to="/projects" class="link">
            <i class="fas fa-project-diagram"> Projetos</i>
          </router-link>
        </li>
      </ul>
    </nav>
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
  .panel li {
    margin: 8px 0;
  }
  .link {
    color: #fff
  }
  .link:hover {
    color: #FAF0CA;
  }
  .link.router-link-active {
    color: #FAF0CA;
  }
</style>