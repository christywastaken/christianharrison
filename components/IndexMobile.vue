<template>
  <div class="flex flex-col mt-20">
    <div class="flex flex-col p-6">
      <div class="text-slate-50 italic text-lg justify-center text-center">
        My whole life I have loved technology. Since graduating Uni I have been working in events but, as enjoyable as
        it is, I feel the time has come to move on. In Jan '23 I started my journey into software engineering. This
        website acts to showcase my learning and growth.
      </div>
    </div>
    <div class="flex flex-row items-center justify-center mx-6">
      <div class="flex w-1/2 justify-center items-center">
        <img src="/misc/profile-pic.png" class="flex w-full h-full p- items-center justify-center mt-8" />
      </div>
      <div class="w-1/2 flex flex-col justif-center">
        <div class="flex flex-row justify-center">
          <img
            v-for="(item, index) in stackImagesArray1"
            :key="index"
            :src="`/stack-images/${item}.svg`"
            class="h-1/6 w-1/6"
          />
        </div>
        <div class="flex flex-row justify-center">
          <img
            v-for="(item, index) in stackImagesArray2"
            :key="index"
            :src="`/stack-images/${item}.svg`"
            class="h-1/6 w-1/6"
          />
        </div>
      </div>
    </div>
    <a
      href="https://github.com/christywastaken"
      class="flex flex-row justify-center items-center text-white hover:text-gray-400 mt-8"
      target="_blank"
      ><img src="/stack-images/github-mark-white.svg" class="flex object-contain pe-4 h-7 flex-row" />
      <u>github.com/christywastaken</u></a
    >
  </div>
</template>

<script setup>
  const stackImagesArray1 = ["python", "swift", "javascript", "html", "css"];

  const stackImagesArray2 = ["mongo", "sql", "nuxt", "vue", "numpy", "pandas"];
</script>
