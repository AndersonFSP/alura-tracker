<template>
  <section>
    <router-link to="/projects/create">
      <Button text="Novo projeto" icon="fa-plus"/>
    </router-link>
    <table class="table is-full-width">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>{{ project.id }}</td>
          <td>{{ project.name }}</td>
          <td>
            <router-link :to="`/projects/${project.id}`" class="button">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </router-link>
            <button class="button ml-2 is-danger" @click="remove(project.id)">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Button from '@/components/Button.vue'
import { useStore } from '@/store'
import { REMOVE_PROJECT } from '@/store/types/mutations'

export default defineComponent({
  name: 'List',
  components: {
    Button
  },

  methods: {
    remove(id: string): void {
      this.store.commit(REMOVE_PROJECT, id)
    }
  },

  setup() {
    const store = useStore()
    return {
      projects: computed(() => store.state.projects),
      store
    }
  }
})
</script>