<template>
  <a :href="link" target="_blank">
    <div class="flex flex-col mb-8 justify-center">
      <h2 class="text-4xl font-bold">{{ title }}</h2>
      <p class="italic mb-4">{{ about }}</p>
      <img :src="imageSrc" class="object-contain" />
    </div>
  </a>
</template>

<script setup lang="ts">
  defineProps<{
    title?: String;
    about?: String;
    link?: String;
    imageSrc?: String;
  }>();
</script>
