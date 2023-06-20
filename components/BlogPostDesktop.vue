
<template>
  <div class="">
    <a :href="link" target="_blank" class="absolute top-0 left-0 hover:white-shadow" />
    <a :href="link" target="_blank" class="flex flex-col justify-center p-7 my-4 rounded-md bg-slate-100 max-w-4xl hover:white-shadow">
      <h2 class="md:text-3xl text-xl font-bold mb-4">{{ title }}</h2>
      <div class="flex flex-row justify-center pt-4 space-x-8 items-center">
        <p class="w-1/2 mb-4 text-sm" v-html="about"></p>
        <img :src="imageSrc" class=" w-1/2 h-auto rounded-md bp-image-shadow" />
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title?: string;
    about?: string;
    link?: string;
    imageSrc?: string;
  }>();
</script>


