<template>
  <div class="mb-8">
  <h1 class="text-4xl font-semibold">{{ title }}</h1>
  <p class="italic mb-4">{{ about }}</p>
  <iframe src:="link" class="w-full h-[500px] border-none"></iframe>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
})

</script>



