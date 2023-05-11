
<template>
  <a :href="link" target="_blank" class="flex flex-col justify-center p-4 my-8 rounded-md bg-white max-w-4xl">
    <h2 class="md:text-3xl text-xl font-bold">{{ title }}</h2>
    <div class="flex flex-row justify-center pt-4">
      <p class="w-1/2 italic mb-4">{{ about }}</p>
      <img :src="imageSrc" class="w-1/2 object-contain rounded-md" />
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


