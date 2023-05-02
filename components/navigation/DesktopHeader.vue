<template>
  <div class="flex justify-between items-center px-[10%] h-12 bg-white">
    <div class=" font-semibold">
      <NuxtLink :to="{ name: 'index' }">Christian Harrison</NuxtLink>
    </div>
    <div class="flex items-center space-x-4">
      <NuxtLink :to="{ name: 'index' }" class="hover:text-gray-500">Home</NuxtLink>
      <NuxtLink :to="{ name: 'portfolio' }" class="hover:text-gray-500">Portfolio</NuxtLink>
      <NuxtLink :to="{ name: 'contact' }" class="hover:text-gray-500">Contact</NuxtLink>
    </div>
  </div>
</template>