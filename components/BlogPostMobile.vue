<template>
  <a :href="link" target="_blank" class="flex flex-col justify-center p-4 my-8 rounded-md bg-white hover:white-shadow">
    <h2 class="md:text-3xl text-xl font-bold">{{ title }}</h2>
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
