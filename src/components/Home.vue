<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import NotificationToast from '@/components/NotificationToast.vue'
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()

const message = ref("Page uploaded successfully")
const clearNotification = () => {
  message.value = ''
}
</script>

<template>
    <div>

      <!-- NotificationToast -->
      <NotificationToast status="success" :message="message"
      @clear-notification="clearNotification" />
      
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>

    <div>
      <!-- VueUse-->
      <p>pos: {{x}}, {{y}}</p>

    </div>
    <HelloWorld msg="Vite + Vue3" />        
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

