
<template>
  <div class="flex flex-col items-center p-4 pb-32 mt-12 xl:mt-40">
    <div v-for="(item, index) in blogPostItems" :key="index" class="mt-8 hidden md:flex">
      <BlogPostDesktop :title="item.title" :about="item.about" :image-src="item.image" :link="item.link"/>
    </div>
    <div v-for="(item, index) in blogPostItems" :key="index" class="flex md:hidden">
      <BlogPostMobile :title="item.title" :about="item.about" :image-src="item.image" :link="item.link"/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { blogPostItems } from "@/config";
</script>

