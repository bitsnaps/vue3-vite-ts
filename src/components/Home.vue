<script setup lang="ts">
import HelloWorld from './HelloWorld.vue'
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()
</script>

<template>
    <div>
        <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <div>
      <!-- VueUse-->
      <p>pos: {{x}}, {{y}}</p>
    </div>
    <HelloWorld msg="Vite + Vue3" />        
  </div>
</template>