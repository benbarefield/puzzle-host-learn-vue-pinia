<script setup lang="ts">
console.log(import.meta.env.VITE_API_ENDPOINT)
</script>

<template>
  <header>
    <h1>Puz!</h1>
  </header>

  <p>Start by creating a new view and adding it to the router in <code>router/index.ts</code> for the root route</p>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  padding: 1.5em 0 1.5em 2em;
}
</style>
