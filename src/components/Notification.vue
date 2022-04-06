<template>
  <section class="notification-popup">
    <article 
      v-for="notification in notifications" 
      class="message"
      :class="type(notification.type)" 
      :key="notification.id"
    >
      <div class="message-header">{{ notification.title }}</div>
      <div class="message-body">{{ notification.text }}</div>
    </article>
  </section>
</template>

<script lang="ts"> 
import { NotificationType } from '@/interfaces/INotifications'
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'Notification',

  methods: {
    type(notificationType: NotificationType): string {
      return {
        [NotificationType.Success]: 'is-success',
        [NotificationType.Error]: 'is-danger',
        [NotificationType.Warning]: 'is-warning'
      }[notificationType]
    }
  },

  setup() {
    const store = useStore()
    return {
      notifications: computed(() => store.state.notifications)
    } 
  }
})
</script>

<style scoped>
  .notification-popup {
    position: absolute;
    right: 0;
    width: 300px;
    padding: 8px;
    z-index: 1000;
  }
</style>