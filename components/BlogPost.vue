<template>
  <a :href="link" target="_blank" class="mb-8">
    <h1 class="text-4xl font-bold">{{ title }}</h1>
    <p class="italic mb-4">{{ about }}</p>
    <img :src="imageSrc" class="" />
  </a>
</template>

<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
  });
</script>
