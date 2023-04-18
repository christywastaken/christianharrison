<template>
  <div class="flex items-center justify-around px-[10%] h-[48px]">
    <NuxtLink :to="{ name: 'index' }">Home</NuxtLink>
    <NuxtLink :to="{ name: 'contact' }">Contact</NuxtLink>
    <button class="flex items-center justify-center w-48 h-12 rounded-full bg-gray-200 border-blue-300 border" :class="clickState ? 'bg-green-600' : 'bg-red-500'" @click="toggleClick">
      {{ clickState }}
    </button>
  </div>
</template>

<script setup lang="ts">
const clickState = ref<boolean>(false)
const toggleClick = () => {
  clickState.value = !clickState.value

}
</script>

<style scoped></style>
