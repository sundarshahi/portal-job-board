<template>
  <div className="w-full">
    <Hero />
    <Services />
    <div className="w-full mt-12 mb-16">
      <WelcomeText />
      <div className="w-full flex md:flex-row flex-col items-start relative md:px-16 px-5 gap-9">
        Filters
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import Services from '@/components/Services.vue'
import WelcomeText from '@/components/WelcomeText.vue'
</script>
