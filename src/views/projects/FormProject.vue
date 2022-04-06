<template>
  <section>
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="saveProject">
      <div class="field">
        <label for="project-name" class="label">Nome do Projeto</label>
        <input type="text" class="input" v-model="projectName" />
      </div>
      <div class="field">
        <Button text="Salvar" type="submit"/>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from '@/components/Button.vue'
import { useStore } from '@/store'
import { ADD_PROJECT, UPDATE_PROJECT } from '@/store/types/mutations'
import { NotificationType } from '@/interfaces/INotifications'
import useNotify from '@/hooks/notify'

export default defineComponent({
  name: "FormProject",
  props: {
    id: {
      type: String,
      required: false
    }
  },
  components: {
    Button
  },

  data: () => ({
    projectName: ''
  }),

  methods: {
    saveProject() {
      if (this.id)  
        this.store.commit(UPDATE_PROJECT, {
          id: this.id,
          name: this.projectName
       })
      else 
        this.store.commit(ADD_PROJECT, this.projectName)
      
      this.notify({
        title: 'Novo projeto salvo',
        text: 'Pronto ! Seu projeto já está disponível :)' ,
        type: NotificationType.Success,
      })
      this.projectName = ''
      this.$router.push('/projects')
    },
   
  },

  mounted() {
    if (this.id) {
      const project = this.store.state.projects.find(project => project.id === this.id)
      this.projectName = project?.name || ''
    }
  },

  setup() {
    const store = useStore()
    const { notify } = useNotify()
    return {
      store,
      notify
    }
  }
})
</script>
<style scoped>
 
</style>