<template>
  <div class="flex flex-col 2xl:mt-80 md:mt-60 mt-20 items-center justify-center mx-[10%]">
    <div class="flex flex-row items-center justify-center max-w-7xl">
      <div class="flex flex-col px-8 w-1/2 mx-20">
        <div class="text-slate-50 italic text-lg">
          My whole life I have loved technology. Since graduating I have been helping run an events structures
        company but, as enjoyable as it is, the time has come to move on. In Jan '23 I started my journey into
        software engineering. This website acts to showcase my learning and growth.
        </div>
        <div class="flex flex-row mt-12">
          <img
            v-for="(item, index) in stackImagesArray"
            :key="index"
            :src="`/stack-images/${item}.svg`"
            class="h-1/12 w-1/12"
          />
        </div>
        <div class="flex flex-row text-white items-start justify-start mt-12">
          <a
            href="https://github.com/christywastaken"
            class="flex flex-row items-center hover:text-gray-400"
            target="_blank"
            ><img src="/stack-images/github-mark-white.svg" class="flex object-contain pe-4 h-7 flex-row" />
            <u>github.com/christywastaken</u></a
          >
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
