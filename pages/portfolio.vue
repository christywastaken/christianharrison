
<template>
  <div class="flex-col items-center p-4 px-[10%]">
    <li v-for="(item, index) in blogPostItems" :key="index" class="hidden md:flex">
      <BlogPostDesktop :title="item.title" :about="item.about" :image-src="item.image" :link="item.link"/>
    </li>
    <li v-for="(item, index) in blogPostItems" :key="index" class="flex md:hidden">
      <BlogPostMobile :title="item.title" :about="item.about" :image-src="item.image" :link="item.link"/>
    </li>
  </div>
</template>

<script setup lang="ts">
  import { blogPostItems } from "@/config";
</script>

