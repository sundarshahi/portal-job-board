<template>
  <div class="w-full flex flex-col items-center gap-8 mt-16 mb-24 md:px-0 px-5">
    <div class="flex flex-col gap-1 text-center">
      <span class="font-semibold text-2xl text-indigo-500">Our Services</span>
      <p class="text-[15px] text-gray-600 max-w-[500px] leading-7">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet nisi
        aspernatur eum quod.
      </p>
    </div>
    <div class="flex md:w-[65%] my-0 mx-auto w-full items-center gap-8 md:flex-row flex-col">
      <div
        v-for="(service, index) in servicesList"
        :key="index"
        class="w-full bg-white hover:bg-indigo-50 transition-all duration-300 p-5 rounded-2xl border border-gray-200 shadow-sm flex flex-col gap-3 items-start"
      >
        <span class="text-indigo-500 font-semibold">{{ service.title }}</span>
        <p class="text-[15px] leading-7 text-gray-700">{{ service.desc }}</p>
        <a href="#" class="text-indigo-500 text-[15px]">Learn More</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const servicesList = [
  {
    title: 'Service',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet nisi aspernatur eum quod.',
  },
  {
    title: 'Service',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet nisi aspernatur eum quod.',
  },
  {
    title: 'Service',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet nisi aspernatur eum quod.',
  },
]
</script>
