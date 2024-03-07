<template>
  <div class="w-full md:h-[60px] h-auto py-5 md:py-0 bg-white shadow-sm flex">
    <div
      class="flex md:flex-row flex-col md:h-[60px] h-full w-full md:gap-0 gap-5 md:px-[65px] px-[23px] md:items-center justify-between items-start"
    >
      <div
        class="text-indigo-500 font-bold text-[28px] cursor-pointer md:ml-[12px]"
      >
        Job <span class="text-indigo-300">Board</span>
      </div>
      <div
        class="flex md:flex-row flex-col md:items-center items-start md:gap-6 gap-4"
      >
        <AppLink
          v-for="link in footerLinks"
          :key="link.title"
          :to="link.path"
          class="cursor-pointer font-medium text-[15px] text-[#828ea8] transition-all duration-200"
          :name="link.name"
          :aria-label="link.title"
        >
          {{ link.title }}
        </AppLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface FotterLinks {
  name: string
  title?: string
  path?: string
}
const footerLinks = computed<FotterLinks[]>(() => [
  { title: 'About', name: 'about', path: '/' },
  { title: 'Terms and Conditions', name: 'terms-and-conditions', path: '/' },
  { title: 'Newsletter', name: 'newsletter', path: '/' },
  { title: 'Services', name: 'services', path: '/' },
  { title: 'Contact', name: 'contact', path: '/' },
])
</script>
