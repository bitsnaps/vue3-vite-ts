<script setup lang="ts">
import { ref, computed, ComputedRef, Ref } from 'vue'

const d: Date = new Date()
// let today: string = `${d.getDate()}/${(d.getMonth()+1).toString().padStart(2,'0')}/${d.getFullYear()}`
// const year: string = d.getFullYear().toString()
const year: Ref<string> = ref(`${d.getFullYear().toString()}`)

const today: ComputedRef<string> = computed(() => `${d.getDate()}/${(d.getMonth()+1).toString().padStart(2,'0')}/${d.getFullYear()}`)
</script>

<template>
    <div>
        <h1>About</h1>
        <p>A simple Vue3 & Vite demo application (today is {{ today }})</p>
        <p>Copyright &copy; {{ year }}</p>
    </div>
</template>
