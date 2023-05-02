<!-- <template>
  <div class="flex items-center space-x-4">
    <NuxtLink :to="{ name: 'index' }" class="hover:text-gray-500">Home</NuxtLink>
    <NuxtLink :to="{ name: 'portfolio' }" class="hover:text-gray-500">Portfolio</NuxtLink>
    <NuxtLink :to="{ name: 'contact' }" class="hover:text-gray-500">Contact</NuxtLink>
  </div>
</template> -->

<template>
  <ul class="flex flex-row">
    <li v-for="(item, index) in menuItems" :key="index" class="flex flex-row w-full px-2">
      <NuxtLink :to="{ name: item.name }" class="hover:text-gray-500"> {{ item.display }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { menuItems } from "../../config"
</script>