

<template>
  <div class="flex flex-col mt-20">
    <div class="flex flex-col p-6">
      <div class="text-white italic text-lg">
        Driven by a lifelong fascination with technology, I began my journey into software engineering in January 2023.
        With a passion for using technology to make a positive impact, I am eager to continue learning and growing.
      </div>
      <div class="">
        <img src="/misc/profile-pic.png" class="w-full h-full object-contain" />
      </div>
    </div>
    <div class="flex flex-row m-6 justify-center">
          <img
            v-for="(item, index) in stackImagesArray"
            :key="index"
            :src="`/stack-images/${item}.svg`"
            class="h-1/12 w-1/12"
          />
        </div>
  </div>
</template>

<script setup>
  const stackImagesArray = [
    "python",
    "swift",
    "javascript",
    "html",
    "css",
    "mongo",
    "sql",
    "nuxt",
    "vue",
    "numpy",
    "pandas",
  ];
</script>
