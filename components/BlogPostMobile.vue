<template>
  <a :href="link" target="_blank" class="flex flex-col justify-center p-4 my-8 rounded-md bg-slate-50 hover:white-shadow">
    <h2 class="md:text-3xl text-xl font-bold">{{ title }}</h2>
    <img :src="imageSrc" class="object-contain rounded-md" />
    <p class="mb-4" v-html="about"></p>
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
