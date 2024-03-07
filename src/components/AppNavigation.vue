<template>
  <div class="w-full h-[60px] bg-white shadow-sm absolute top-0 flex z-10">
    <div class="w-full md:px-[50px] px-[23px] flex items-center justify-between">
      <div
        class="text-indigo-500 font-bold text-[28px] cursor-pointer md:ml-[12px]"
      >
        Job <span class="text-indigo-300">Board</span>
      </div>
      <div class="hidden md:flex items-center gap-6">
        <AppLink
          v-for="navlink in navLinks"
          :key="navlink.title"
          :name="navlink.title"
          :to="navlink.path"
          class="cursor-pointer font-medium text-[15px]"
          :class="{ 'text-indigo-500': navlink.active, 'text-[#828ea8]': !navlink.active }"
          transition="all 200ms"
        >
          {{ navlink.title }}
        </AppLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const navLinks = [
  { title: 'Home', path: '/', active: true },
  { title: 'Listed Jobs', path: '/', active: false },
  { title: 'Newsletter', path: '/', active: false },
  { title: 'Contact', path: '/', active: false },
  { title: 'About', path: '/', active: false },
]
</script>
