<template>
  <div className="w-screen h-screen flex flex-col justify-between">
    <AppNavigation />
    <RouterView />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from './AppFooter.vue'
import AppNavigation from './AppNavigation.vue'
</script>
