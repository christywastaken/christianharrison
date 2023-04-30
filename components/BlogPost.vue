<template>
  <a :href="link" target="_blank" class="flex flex-col justify-center p-8 my-8 rounded-md bg-secondary">
    <h2 class="text-4xl font-bold">{{ title }}</h2>
    <p class="italic mb-4">{{ about }}</p>
    <img :src="imageSrc" class="object-contain rounded-md" />
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
