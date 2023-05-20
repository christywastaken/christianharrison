<template>
  <div class="flex flex-col md:mt-60 mt-20 items-center justify-center mx-[10%]">
    <div class="flex flex-row items-center justify-center max-h-64">
      <div class="flex flex-col px-8 w-1/2 items-center mx-20">
        <div class="text-white italic text-lg">
          Driven by a lifelong fascination with technology, I began my journey into software engineering in January
          2023. With a passion for using technology to make a positive impact, I am eager to continue learning and
          growing.
        </div>
        <div class="flex flex-row mt-20">
          <img
            v-for="(item, index) in stackImagesArray"
            :key="index"
            :src="`/stack-images/${item}.svg`"
            class="h-1/12 w-1/12"
          />
        </div>
      </div>
      <div class="flex w-64 h-64 items-center">
        <img src="/misc/profile-pic.png" class="flex w-full h-full object-contain items-center" />
      </div>
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
