<template>
  <ul class="flex flex-row">
    <li v-for="(item, index) in menuItems" :key="index" class="flex flex-row w-full px-2">
      <NuxtLink :to="{ name: item.name }" class="hover:text-gray-500"> {{ item.display }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { menuItems } from "../../config";
</script>
